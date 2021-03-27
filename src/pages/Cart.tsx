import React from 'react'

import Basket from '../components/Basket'
import PickupPoint from '../components/PickupPoint'

export default function Cart() {
    return (
        <div className="container m-auto py-5 sm:px-0 px-2">
            <div className="text-4xl font-bold mb-2">Ваша корзина</div>
            <Basket />
            <div className="text-3xl font-bold mb-2">Пункт выдачи</div>
            <PickupPoint />
            <div className="flex space-x-5 mt-5">
                <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">Получатель</div>
                    <div className="bg-white rounded-xl p-5 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="">Телефон</div>
                            <input className="bg-gray-100 rounded-xl p-2"></input>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="">Код подтверждения</div>
                            <input className="bg-gray-100 rounded-xl p-2"></input>
                        </div>
                        <button className="bg-green rounded-xl text-white py-2 px-10">Отправить код</button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-2xl font-bold mb-2">Примечание к заказу</div>
                    <textarea className="w-full p-3 bg-white rounded-xl"></textarea>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <button className="bg-green rounded-xl text-white py-2 px-10">Оформить заказ</button>
            </div>
        </div>
    )
}
