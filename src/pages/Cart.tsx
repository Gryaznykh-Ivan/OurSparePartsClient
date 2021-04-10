import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

import Basket from '../components/Basket'
import PickupPoint from '../components/PickupPoint'
import { MaskPhone } from '../utils/mask';

export default function Cart() {
    const [telephone, setTelephone] = useState('');

    const onChangeEvent = (e: React.BaseSyntheticEvent<InputEvent, HTMLInputElement>) => 
    {
        let value = e.target.value;

        if (e.nativeEvent.data !== null 
            && e.nativeEvent.inputType !== 'deleteContentBackward'
        ) {
            value = MaskPhone(telephone, e.nativeEvent.data);
        }

        setTelephone(value);
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
                    <div className="flex flex-col bg-white rounded-xl p-5 space-y-4 justify-center">
                        <div className="flex md:flex-row flex-col items-center justify-between">
                            <div className="">Телефон</div>
                            <input className="bg-gray-100 rounded-xl p-2" value={ telephone } onChange={ onChangeEvent }></input>
                        </div>
                        <div className="flex md:flex-row flex-col items-center justify-between">
                            <div className="">Код подтверждения</div>
                            <input className="bg-gray-100 rounded-xl p-2"></input>
                        </div>
                        <button className="bg-green rounded-xl text-white lg:w-1/2 w-full py-2 px-10">Отправить код</button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">Примечание к заказу</div>
                    <TextareaAutosize className=" appearance-none w-full p-3 bg-white rounded-xl" minRows={5}/>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <button className="bg-green rounded-xl text-white py-2 px-10">Оформить заказ</button>
            </div>
        </div>
    )
}
