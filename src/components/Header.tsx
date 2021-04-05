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
                        <div className="relative">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H3.62554C4.0912 1 4.49522 1.32141 4.59993 1.77514L5.58704 6.05263M5.58704 6.05263L7.98369 16.4381C8.10865 16.9796 8.6511 17.3153 9.19146 17.1856L23.2334 13.8156C23.683 13.7077 24 13.3056 24 12.8432V7.05263C24 6.50035 23.5523 6.05263 23 6.05263H5.58704Z" stroke="white" strokeWidth="2" />
                                <circle cx="7.57893" cy="22.4737" r="2.52632" fill="white" />
                                <circle cx="20.2105" cy="22.4737" r="2.52632" fill="white" />
                            </svg>
                            <div className="absolute -top-3 -right-2 bg-green min-w-4 h-4 px-1 rounded-full flex items-center justify-center text-sm text-white">2</div>
                        </div>
                        <div className="text-white text-md mt-1">Корзина</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
