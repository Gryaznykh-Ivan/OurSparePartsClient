import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Header() {
    return (
        <div className="w-full sm:h-28 bg-red p-2">
            <div className="container h-full m-auto flex items-center justify-between">
                <Link to="/"><img className="sm:w-auto w-24" src={logo} alt="" /></Link>
                <div className="flex space-x-6">
                    <Link to="/orders" className="flex flex-col items-center justify-end">
                        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="22" height="30" rx="2" stroke="white" strokeWidth="2" />
                            <path d="M4 5H19.5" stroke="white" />
                            <path d="M4 9H18" stroke="white" />
                            <path d="M4 13H12" stroke="white" />
                            <path d="M13 13H16" stroke="white" />
                            <path d="M11 17H14" stroke="white" />
                            <path d="M4 17H10" stroke="white" />
                            <path d="M4 21H19.5" stroke="white" />
                            <path d="M18 20C18 22.7614 15.7614 25 13 25C10.2386 25 8 22.7614 8 20C8 17.2386 10.2386 15 13 15C15.7614 15 18 17.2386 18 20ZM10 20C10 21.6569 11.3431 23 13 23C14.6569 23 16 21.6569 16 20C16 18.3431 14.6569 17 13 17C11.3431 17 10 18.3431 10 20Z" fill="white" />
                            <rect x="16.444" y="22.5328" width="6.44316" height="2" rx="1" transform="rotate(45 16.444 22.5328)" fill="white" />
                        </svg>
                        <div className="text-white text-md mt-1">Заказы</div>
                    </Link>
                    <Link to="/cart" className="flex flex-col items-center justify-end">
                        <svg className="m-auto" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3488 31.3529H26.093C29.9076 31.3529 33 28.2716 33 24.4706C33 20.6696 29.9076 17.5882 26.093 17.5882H8.44186V24.4706C8.44186 28.2716 11.5342 31.3529 15.3488 31.3529ZM15.3488 31.3529C13.2296 31.3529 11.5116 33.0648 11.5116 35.1765C11.5116 37.2881 13.2296 39 15.3488 39C17.4681 39 19.186 37.2881 19.186 35.1765C19.186 33.0648 17.4681 31.3529 15.3488 31.3529ZM0 13H4.60465L10.7442 19.1176M28.3953 35.1765C28.3953 37.2881 26.6774 39 24.5581 39C22.4389 39 20.7209 37.2881 20.7209 35.1765C20.7209 33.0648 22.4389 31.3529 24.5581 31.3529C26.6774 31.3529 28.3953 33.0648 28.3953 35.1765Z" stroke="white" strokeWidth="2" />
                            <circle cx="29.5" cy="11.5" r="11.5" fill="#68EC00" />
                        </svg>
                        <div className="text-white text-md mt-1">Корзина</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
