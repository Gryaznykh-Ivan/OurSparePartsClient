import React from 'react'
import { TableRow } from '../components/Table'

import product from '../assets/product.jpg'
import Table from '../components/Table'
import ProductCard from '../components/ProductCard';

const data: Array<TableRow> = [{
    key: "Страна",
    value: "Россия"
},
{
    key: "Производитель",
    value: "Китай"
},
{
    key: "Производитель",
    value: "Китай"
},
{
    key: "Страна",
    value: "Россия"
},
{
    key: "Страна",
    value: "Россия"
},
{
    key: "Страна",
    value: "Россия"
}];

export default function Product() {
    return (
        <div className="container m-auto md:px-0 py-5 px-2">
            <div className="w-full rounded-xl bg-white sm:py-6 sm:px-10 p-3 flex lg:flex-row flex-col lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-gray-100">
                <img className="self-center lg:w-2/5 sm:w-2/3 w-full lg:mr-8 lg:mb-0 mb-8 rounded-xl" src={product} alt="" />
                <div className="lg:w-3/5 w-full lg:pl-8 lg:bt-0 pt-8 flex flex-col">
                    <div className="text-sm text-gray-600">Код товара: 1231234</div>
                    <div className="text-2xl font-bold">Диск штампованный 6.0Jx16H2 5/130/78.1 ET68</div>
                    <Table data={data} />
                    <div className="flex-1 flex flex-col justify-end space-y-5">
                        <div className="flex space-x-5 text-center">
                            <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Доставка:</span>
                                Самовывоз
                            </div>
                            <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Цена:</span>
                                1200 руб.
                            </div>
                        </div>
                        <div className="flex space-x-5 text-center relative">
                            <button className="w-1/2 bg-red rounded-xl text-lg text-white py-2">Добавить в корзину</button>
                            <button className="w-1/2 bg-green rounded-xl text-lg text-white py-2">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col mt-5 lg:space-y-0 lg:space-x-8 space-y-5">
                <div className="lg:w-2/3 w-full">
                    <div className="text-3xl font-bold mb-5">Описание</div>
                    <div className="rounded-xl bg-white p-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor a dolorum fugit rerum eligendi nihil tempora quisquam itaque repellat eos sunt nesciunt aut voluptas iure, facere doloremque. Impedit, libero ratione, esse ducimus alias quas expedita eum magnam vel consequuntur nihil rerum aliquid, dicta adipisci quia facere praesentium nam molestiae aperiam nesciunt. Assumenda ullam reiciendis neque dolore, illo, iure ducimus iste aliquid, ex voluptate quibusdam mollitia esse explicabo commodi minima quam sapiente cumque. At ullam sapiente molestias quam velit. Architecto natus eos sint possimus laudantium minus error. Voluptas, quidem vitae? Est vero ipsam dolores neque facilis corrupti officia exercitationem! Maiores iusto perferendis et cumque adipisci officiis harum molestias voluptas eligendi modi mollitia dicta iure molestiae, sit culpa necessitatibus! Iusto omnis consequuntur aliquam cumque ex expedita minus possimus. Porro aperiam cum exercitationem ut optio eveniet inventore itaque ipsam, soluta, voluptates dolorum incidunt commodi quaerat veniam velit alias minima perspiciatis, dolore odio repudiandae!</div>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="text-3xl font-bold mb-5">Получение товара</div>
                    <div className="rounded-xl bg-white p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt deleniti voluptatibus inventore dicta ratione sed? Dignissimos laboriosam sit et, nulla facere assumenda numquam dolor, molestias eos sunt incidunt, dolore voluptas dolorem. Quam, quo non reprehenderit nisi unde nemo quia doloribus quidem maiores natus, labore, ullam facilis quisquam voluptate dignissimos!</div>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="text-3xl font-bold">Подобные товары</div>
                <div className="mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:gap-5 sm:grid-cols-3 justify-items-center grid-cols-2 gap-2">
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
        </div>
    )
}
