import React, { useMemo } from 'react'
import { CartItem } from '../types/store'

interface Props {
    cart: CartItem[]
}

export default function OrderInfo({ cart }: Props) {
    const totalPrice = useMemo(() => cart.reduce((a, b) => a += b.price * b.amount, 0), [cart]);

    return (
        <div className="py-1 bg-white rounded-xl">
            <div className="bg-white rounded-xl px-5 divide-gray-100 divide-y text-center">
                {cart.map(item => (
                    <div key={ item.productId } className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                        <div className="flex-1 sm:text-left">{ item.title }</div>
                        <div className="w-14">{ item.amount } шт.</div>
                        <div className="w-14">{ item.price }</div>
                    </div>
                ))}
                <div className="flex sm:flex-row flex-col space-x-5 py-3 items-center sm:space-y-0 space-y-3 text-lg font-bold">
                    <div className="flex-1 sm:text-left">Итого</div>
                    <div className="">{ totalPrice } ₽</div>
                </div>
            </div>
        </div>
    )
}
