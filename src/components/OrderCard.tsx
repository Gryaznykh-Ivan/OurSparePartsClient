import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderCard() {
    return (
        <Link to="/order" className="w-full bg-white rounded-xl p-5">
            <div className="text-gray-600 text-sm">Заказ №80000000123</div>
            <div className="font-bold text-2xl">г. Димитровград, ул. Свирская, дом 20</div>
            <div className="flex space-x-5 my-2">
                <div className="flex flex-col w-full">
                    <div className="text-gray-600">Статус</div>
                    <div className="w-full py-3 bg-gray-100 rounded-xl text-center">В обработке</div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="text-gray-600">Цена</div>
                    <div className="w-full py-3 bg-gray-100 rounded-xl text-center">1245,00 ₽</div>
                </div>
            </div>
            <div className="text-gray-600 text-sm">Дата изменения статуса: 14 ноября 2020 г.</div>
        </Link>
    )
}
