import React from 'react'
import OrderCard from '../components/OrderCard'

export default function Orders() {
    return (
        <div className="container m-auto py-5 sm:px-0 px-2">
            <div className="w-full bg-white rounded-xl p-4 flex md:flex-row flex-col justify-between items-center">
                <div className="md:mr-5 mr-0 md:mb-0 mb-3">Введите номер телефона</div>
                <div className="space-x-5 flex flex-1 justify-end">
                    <input className="bg-gray-100 p-2 rounded-xl md:w-1/3 w-1/2 text-center" type="text" />
                    <button className="bg-green md:px-10 py-2 rounded-xl md:w-auto w-1/2 text-white">Проверить</button>
                </div>
            </div>
            <div className="text-3xl font-bold py-5">Найденные заказы</div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    )
}
