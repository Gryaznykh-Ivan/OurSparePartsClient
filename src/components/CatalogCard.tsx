import React from 'react'
import { Link } from 'react-router-dom'

import product from '../assets/product.jpg'

export default function CatalogCard() {
    return (
        <Link to="/catalog" className="w-full rounded-2xl overflow-hidden relative hover:shadow-md transform transition-transform duration-200 hover:-translate-y-1">
            <img className="w-full" src={ product } alt=""/>
            <div className="absolute bottom-0 left-0 right-0 text-center bg-red text-white lg:text-3xl text-lg font-bold p-2 rounded">Бензонасос</div>
        </Link>
    )
}
