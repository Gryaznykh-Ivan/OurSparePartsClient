import React, { useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getOrders, loadMoreOrders } from '../actions/orders'
import OrderCard from '../components/OrderCard'
import { AppState } from '../store'
import { AuthState, OrdersState } from '../types/store'
import { MaskPhone } from '../utils/mask'

interface PropsFromState {
    orders: OrdersState,
    auth: AuthState
}

interface PropsFromDispatch {
    getOrders: (telephone: string, limit: number, skip: number) => void,
    loadMoreOrders: (telephone: string, limit: number, skip: number) => void
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps;

const Orders = ({ history, orders, auth, getOrders, loadMoreOrders }: Props) => {
    const [state, setState] = useState({
        telephone: '',
        code: ''
    });

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

    const onButtonClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    return (
        <div className="container m-auto sm:px-0 px-2">
            <div className="text-4xl font-bold py-5">Просмотр заказов</div>
            <div className="w-full bg-white rounded-xl p-4 flex md:flex-row flex-col justify-between items-center">
                <div className="md:mr-5 mr-0 md:mb-0 mb-3 text-center">Введите номер телефона</div>
                <div className="space-x-5 flex flex-1 justify-end">
                    <input type="text" className="bg-gray-100 p-2 rounded-xl md:w-1/3 w-1/2 text-center" name="telephone" value={ state.telephone } onChange={ onTelephoneChangeEvent } />
                    <input type="text" className="bg-gray-100 p-2 rounded-xl w-16 text-center" name="code" maxLength={4} value={ state.code } onChange={ onChangeEvent } />
                    <button className="bg-green md:px-10 py-2 rounded-xl md:w-auto w-1/2 text-white" onClick={ onButtonClickEvent }>Проверить</button>
                </div>
            </div>
            <div className="text-3xl font-bold py-5">Найденные заказы</div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 pb-5">
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    orders: state.orders,
    auth: state.auth
});

export default connect(mapStateToProps, { getOrders, loadMoreOrders })(Orders)
