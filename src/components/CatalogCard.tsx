import React from 'react'
import { Link } from 'react-router-dom'

import noImage from '../assets/no-image.svg'

interface Props {
    categoryId: number,
    title: string,
    imageUrl: string | null
}

export default function CatalogCard({ categoryId, title, imageUrl }: Props) {
    return (
        <Link to={ `/catalog?categoryId=${ categoryId }` } className="w-full flex rounded-2xl overflow-hidden relative hover:shadow-md transform transition-transform duration-200 hover:-translate-y-1">
            <img className="object-contain w-full lg:h-96" src={ imageUrl || noImage } alt=""/>
            <div className="absolute bottom-0 left-0 right-0 text-center bg-red text-white xl:text-3xl text-lg font-bold p-2 rounded">{ title }</div>
        </Link>
    )
}
