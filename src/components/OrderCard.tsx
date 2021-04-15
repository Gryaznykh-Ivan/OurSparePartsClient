import React from 'react'
import { Link } from 'react-router-dom'
import { MIOrder } from '../types/store'

interface Props {
    order: MIOrder
}

export default function OrderCard({ order }: Props) {
    const Time = new Date(order.updatedAt).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })

    return (
        <Link to={ `/order/${ order.orderId }` } className="w-full bg-white rounded-xl p-5">
            <div className="text-gray-600 text-sm">Заказ №{ order.orderId }</div>
            <div className="font-bold text-2xl">{ order.address }</div>
            <div className="flex space-x-5 my-2">
                <div className="flex flex-col w-full">
                    <div className="text-gray-600">Статус</div>
                    <div className="w-full py-3 bg-gray-100 rounded-xl text-center">{ order.status }</div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="text-gray-600">Цена</div>
                    <div className="w-full py-3 bg-gray-100 rounded-xl text-center">{ order.totalPrice } ₽</div>
                </div>
            </div>
            <div className="text-gray-600 text-sm">{ Time }</div>
        </Link>
    )
}
