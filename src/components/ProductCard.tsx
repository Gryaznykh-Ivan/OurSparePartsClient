import React from 'react'
import { Link } from 'react-router-dom'

import product from '../assets/product.jpg'

export default function ProductCard() {
    return (
        <div className="w-full bg-white rounded-xl p-5 space-y-2">
            <Link to="/product">
                <img className="w-full max-h-64" src={product} alt="" />
                <div className="mt-2">R15 185/60 Cordiant SPORT-2 PS-501 (лето)</div>
            </Link>
            <div className="flex justify-between text-sm">
                <div className="text-gray-500">Доступен для заказа</div>
                <div className="">Да</div>
            </div>
            <div className="flex space-x-2">
                <button className="flex-1 bg-green text-white text-center p-1 rounded-xl">Заказать</button>
                <button className="w-8 h-8  rounded-xl flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3488 19.3529H26.093C29.9076 19.3529 33 16.2716 33 12.4706C33 8.66957 29.9076 5.58824 26.093 5.58824H8.44186V12.4706C8.44186 16.2716 11.5342 19.3529 15.3488 19.3529ZM15.3488 19.3529C13.2296 19.3529 11.5116 21.0648 11.5116 23.1765C11.5116 25.2881 13.2296 27 15.3488 27C17.4681 27 19.186 25.2881 19.186 23.1765C19.186 21.0648 17.4681 19.3529 15.3488 19.3529ZM0 1H4.60465L10.7442 7.11765M28.3953 23.1765C28.3953 25.2881 26.6774 27 24.5581 27C22.4389 27 20.7209 25.2881 20.7209 23.1765C20.7209 21.0648 22.4389 19.3529 24.5581 19.3529C26.6774 19.3529 28.3953 21.0648 28.3953 23.1765Z" stroke="black" stroke-width="3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
