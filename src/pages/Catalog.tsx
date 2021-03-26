import React from 'react'

import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

export default function Catalog() {
    return (
        <div className="container m-auto flex space-x-5 py-5">
            <div className="flex-1">
                <div className="flex justify-between items-center pl-2">
                    <div className="text-4xl font-bold">Шины</div>
                    <div className="cursor-pointer flex p-2 rounded-lg">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1C1.61081 1 1.25697 1.22581 1.09304 1.57879C0.929105 1.93178 0.984863 2.34781 1.23596 2.64517L9.14925 12.0165V21C9.14925 21.3484 9.33063 21.6718 9.62799 21.8534C9.92535 22.035 10.2958 22.0488 10.6058 21.8897L15.3073 19.477C15.6409 19.3058 15.8507 18.9623 15.8507 18.5873V12.0165L23.764 2.64517C24.0151 2.34781 24.0709 1.93178 23.907 1.57879C23.743 1.22581 23.3892 1 23 1H2Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M5 4L10 10" stroke="black" />
                        </svg>
                        <div className="ml-2">Фильтры</div>
                    </div>
                </div>
                <div className="mt-3 grid xl:grid-cols-4 lg:grid-cols-3 md:gap-5 justify-items-center grid-cols-2 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <Filter />
        </div>
    )
}
