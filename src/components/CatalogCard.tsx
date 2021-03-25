import React from 'react'
import { Link } from 'react-router-dom'

import product from '../assets/product.jpg'

export default function CatalogCard() {
    return (
        <Link to="#" className="rounded-2xl overflow-hidden relative">
            <img src={ product } alt=""/>
            <div className="absolute bottom-0 left-0 right-0 text-center bg-red text-white sm:text-3xl text-lg font-bold px-2 sm:pb-2 pb-1 rounded">Бензонасос</div>
        </Link>
    )
}
