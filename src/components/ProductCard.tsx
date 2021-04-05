import React from 'react'
import { Link } from 'react-router-dom'

import noImage from '../assets/no-image.svg'

interface Props {
    productId: number,
    title: string,
    price: number,
    imageUrl: string,
}

export default function ProductCard({ productId, title, price, imageUrl }: Props) {
    return (
        <div className="w-full bg-white rounded-xl p-5 space-y-2 flex flex-col justify-between">
            <Link to={ `/product/${ productId }` }>
                <img className="object-contain w-full h-64" src={ imageUrl || noImage } alt="" />
                <div className="mt-2">{ title }</div>
            </Link>
            <div className="">
                <div className="flex items-center justify-between text-md space-x-4">
                    <div className="text-gray-500">Цена:</div>
                    <div className="font-bold">{ price } ₽</div>
                </div>
                <div className="flex space-x-2 mt-2">
                    <button className="flex-1 bg-green text-white text-center p-1 rounded-xl">Заказать</button>
                    <button className="w-8 h-8  rounded-xl flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H3.62554C4.0912 1 4.49522 1.32141 4.59993 1.77514L5.58704 6.05263M5.58704 6.05263L7.98369 16.4381C8.10865 16.9796 8.6511 17.3153 9.19146 17.1856L23.2334 13.8156C23.683 13.7077 24 13.3056 24 12.8432V7.05263C24 6.50035 23.5523 6.05263 23 6.05263H5.58704Z" stroke="black" strokeWidth="2" />
                            <circle cx="7.57893" cy="22.4737" r="2.52632" fill="black" />
                            <circle cx="20.2105" cy="22.4737" r="2.52632" fill="black" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
