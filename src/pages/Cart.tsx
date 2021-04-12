import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';

import Basket from '../components/Basket'
import PickupPoint from '../components/PickupPoint'
import { sendCode, verifyCode, createCustomer, logoutCustomer } from '../actions/auth'
import { AppState } from '../store';
import { AuthState, Customer } from '../types/store';
import { MaskCompare, MaskPhone, MaskTypes, PhoneToMask, RemoveMask } from '../utils/mask';
import { toast } from 'react-toastify';

const secondsPreNewSms = 120;

interface PropsFromState {
    auth: AuthState,
    isReadyToOrder: boolean
}

interface PropsFromDispatch {
    logoutCustomer: () => void,
    sendCode: (telephone: string) => void,
    verifyCode: (customerId: number, code: string) => void,
    createCustomer: (customer: Omit<Customer, "customerId">) => void
}

type Props = PropsFromState & PropsFromDispatch;

const Cart = ({ auth, isReadyToOrder, sendCode, verifyCode, createCustomer, logoutCustomer }: Props) => {
    const [timer, setTimer] = useState<{ interval: NodeJS.Timeout | null, value: number }>({
        interval: null,
        value: secondsPreNewSms
    });
    const [state, setState] = useState({
        telephone: '',
        lastname: '',
        forename: '',
        code: ''
    });

    useEffect(() => {
        if (auth.authStage === 'check_sms') {
            setTimer({
                interval: setInterval(onIntervalEvent, 1000),
                value: secondsPreNewSms
            });
        }
        return () => {
            setTimer(prev => {
                if (prev.interval) {
                    clearInterval(prev.interval);
                    prev.interval = null
                }

                return { ...prev, value: prev.value - 1 }
            })
        }
    }, [auth.authStage])

    useEffect(() => {
        if (timer.interval) {
            clearInterval(timer.interval);
        }

        if (auth.customer) {
            setState({ ...state, lastname: auth.customer.lastname, forename: auth.customer.forename, telephone: PhoneToMask(auth.customer.telephone) })
        } else {
            setState({
                telephone: '',
                lastname: '',
                forename: '',
                code: ''
            })
        }
    }, [auth.isAuth])

    const onIntervalEvent = () => {
        setTimer(prev => {
            console.log(prev);

            if (prev.value == 1 && prev.interval) {
                clearInterval(prev.interval);
                prev.interval = null
            }

            return { ...prev, value: prev.value - 1 }
        })
    }

    const onTelephoneChangeEvent = (e: React.BaseSyntheticEvent<InputEvent, HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (e.nativeEvent.data != null && e.nativeEvent.inputType !== 'deleteContentBackward') {
            value = MaskPhone(state.telephone, e.nativeEvent.data);
        }
        setState({ ...state, [e.target.name]: value });
    }

    const onChangeEvent = (e: React.BaseSyntheticEvent<InputEvent, HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const onSendCodeAgain = (e: React.MouseEvent<HTMLButtonElement>) => {
        const telephone = RemoveMask(state.telephone);
        sendCode(telephone);

        setTimer({
            interval: setInterval(onIntervalEvent, 1000),
            value: secondsPreNewSms
        });
    }

    const onButtonClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!MaskCompare(state.telephone, MaskTypes.Phone)) return toast.error('Вы ввели невалидный номер.');

        const telephone = RemoveMask(state.telephone);

        switch (auth.authStage) {
            case 'not_auth':
                sendCode(telephone);
                break;
            case 'register':
                if (state.lastname.length != 0 && state.forename.length != 0) {
                    createCustomer({ telephone: telephone, forename: state.forename, lastname: state.lastname });
                } else {
                    toast.error("Пожалуйста, укажите все данные.");
                }
                break;
            case 'check_sms':
                if (state.code.length == 4) {
                    verifyCode(auth.customerId, state.code);
                }
        }
    }

    const onLogoutEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        logoutCustomer();
    }

    return (
        <div className="container m-auto py-5 sm:px-0 px-2">
            <div className="text-4xl font-bold mb-2">Ваша корзина</div>
            <Basket />
            <div className="text-3xl font-bold mb-2">Пункт выдачи</div>
            <PickupPoint />
            <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5 mt-5">
                <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">Получатель</div>
                    <div className="relative">
                        {auth.isLoading && (
                            <div className="absolute inset-0 bg-gray-500 bg-opacity-20 rounded-xl flex justify-center items-center">
                                <svg className="animate-spin" width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5ZM5 12.5C5 16.6421 8.35786 20 12.5 20C16.6421 20 20 16.6421 20 12.5C20 8.35786 16.6421 5 12.5 5C8.35786 5 5 8.35786 5 12.5Z" fill="white" />
                                    <circle cx="12.5" cy="2.5" r="2.5" fill="#A23231" />
                                </svg>
                            </div>
                        )}
                        <div className="flex flex-col bg-white rounded-xl p-5 space-y-4 justify-center">
                            {(['register', 'loged_in']).includes(auth.authStage) && (
                                <>
                                    <div className="flex md:flex-row flex-col items-center justify-between">
                                        <div className="">Имя</div>
                                        <input className="bg-gray-100 rounded-xl md:w-1/2 w-full text-center p-2" name="forename" value={state.forename} maxLength={16} onChange={onChangeEvent} disabled={auth.isAuth && true}></input>
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between">
                                        <div className="">Фамилия</div>
                                        <input className="bg-gray-100 rounded-xl md:w-1/2 w-full text-center p-2" name="lastname" value={state.lastname} maxLength={16} onChange={onChangeEvent} disabled={auth.isAuth && true}></input>
                                    </div>
                                </>
                            )}
                            <div className="flex md:flex-row flex-col items-center justify-between">
                                <div className="">Телефон</div>
                                <input className="bg-gray-100 rounded-xl md:w-1/2 w-full text-center p-2" type="text" name="telephone" value={state.telephone} onChange={onTelephoneChangeEvent} disabled={auth.isAuth && true}></input>
                            </div>
                            {auth.authStage == 'check_sms' && (
                                <div className="flex md:flex-row flex-col items-center justify-between">
                                    <div className="">Код подтверждения</div>
                                    <input className="bg-gray-100 rounded-xl md:w-1/2 w-full text-center p-2" name="code" value={state.code} maxLength={4} onChange={onChangeEvent} disabled={auth.isAuth && true}></input>
                                </div>
                            )}
                            {auth.authStage == 'check_sms' && <button className={`text-gray-600 text-center focus:outline-none ${timer.value != 0 && "cursor-text"}`} disabled={timer.value != 0 && true} onClick={onSendCodeAgain}>Отправить {timer.value === 0 && "код подтверждения"} повторно {timer.value != 0 && `через ${timer.value}`}</button>}
                            {auth.isAuth && <button className="text-center py-2 bg-gray-100 rounded-xl text-gray-600" onClick={onLogoutEvent}>Оформить заказ на другое имя</button>}
                            {!auth.isAuth && <button className="bg-green rounded-xl text-white lg:w-1/3 w-full py-2 px-10" onClick={onButtonClickEvent}>{auth.authStage === 'register' ? 'Создать' : 'Отправить'}</button>}
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">Примечание к заказу</div>
                    <TextareaAutosize className=" appearance-none w-full p-3 bg-white rounded-xl" minRows={5} />
                </div>
            </div>
            <div className="flex justify-center my-5">
                <button className={`bg-green rounded-xl text-white py-2 px-10 ${!isReadyToOrder && 'hidden'}`}>Оформить заказ</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    isReadyToOrder: !!(state.auth.isAuth && state.pickupPoints.chosenPickupPoint && state.cart.items.length != 0),
    auth: state.auth,
})

export default connect(mapStateToProps, { sendCode, verifyCode, createCustomer, logoutCustomer })(Cart)
