import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className="w-full bg-red py-8 flex-initial flex-shrink-0">
            <div className="container m-auto flex flex-col items-center">
                <img src={logo} alt="" />
                <div className="flex md:flex-row md:space-x-12 md:space-y-0 text-white mt-5 flex-col space-y-4">
                    <div className="flex flex-col md:items-start items-center">
                        <h2 className="text-lg font-bold">Социальные сети</h2>
                        <Link className="text-center" to="#">Вконтакте</Link>
                        <Link className="text-center" to="#">Инстаграмм</Link>
                        <Link className="text-center" to="#">Одноклассники</Link>
                    </div>
                    <div className="flex flex-col md:items-start items-center">
                        <h2 className="text-lg font-bold">Юридическая информация</h2>
                        <Link className="text-center" to="#">Политика обработки персональных данных</Link>
                        <Link className="text-center" to="#">Пользовательское соглашение</Link>
                    </div>
                    <div className="flex flex-col md:items-start items-center">
                        <h2 className="text-lg font-bold">О компании</h2>
                        <Link className="text-center" to="#">О компании</Link>
                        <Link className="text-center" to="#">Контактная информация</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
