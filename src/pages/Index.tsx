import React from 'react'
import CatalogCard from '../components/CatalogCard'

//import intro from '../assets/intro.jpg'

export default function Index() {
    return (
        <div className="">
            <img className="w-full" src="https://цфмр.рф/wp-content/uploads/2020/05/basketbol_myach_basketbolnoe_pole_120082_2560x1080-2560x500.jpg" alt=""/>
            <div className="container m-auto py-10">
                <div className="flex justify-between items-center px-2">
                    <div className="text-4xl font-medium">Каталог</div>
                    <div className="text-gray-600 text-sm">Всего каталогов: 120</div>
                </div>
                <div className="bg-white rounded-xl mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:gap-10 sm:p-8 p-4 justify-items-center grid-cols-2 gap-2">
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </div>
        </div>
    )
}
