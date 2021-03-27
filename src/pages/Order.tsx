import React from 'react'
import Table, { TableRow } from '../components/Table';

import map from '../assets/map.jpg'

const data: Array<TableRow> = [{
    key: "Фамилия",
    value: "Иван"
},
{
    key: "Имя",
    value: "Иван"
},
{
    key: "Телефон",
    value: "+79963226559"
}];


export default function Order() {
    return (
        <div className="container m-auto py-5 md:px-0 px-2">
            <div className="flex md:flex-row flex-col justify-between md:items-center">
                <div className="text-4xl font-bold">Информация о заказе</div>
                <div className="text-gray-600 text-sm">Заказ №80000000123</div>
            </div>
            <div className="flex lg:flex-row flex-col lg:space-x-5">
                <div className="lg:w-2/3">
                <div className="">
                        <div className="text-2xl font-bold my-3">Описание заказa</div>
                        <div className="py-1 bg-white rounded-xl">
                            <div className="bg-white rounded-xl px-5 divide-gray-100 divide-y text-center">
                                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                                    <div className="flex-1 sm:text-left">Fiat / Alfa / Lancia 60 603 982</div>
                                    <div className="w-14">
                                        1 шт
                                    </div>
                                    <div className="w-14">234234</div>
                                </div>
                                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                                    <div className="flex-1 sm:text-left">Lada 21700 3101015 01</div>
                                    <div className="w-14">
                                        2 шт
                                    </div>
                                    <div className="w-14">12345</div>
                                </div>
                                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                                    <div className="flex-1 sm:text-left">Lada 21700 3101015 01</div>
                                    <div className="w-14">
                                        1 шт
                                    </div>
                                    <div className="w-14">12345</div>
                                </div>
                                <div className="flex sm:flex-row flex-col space-x-5 py-3 items-center sm:space-y-0 space-y-3 text-lg font-bold">
                                    <div className="flex-1 sm:text-left">Итого</div>
                                    <div className="">1245,00 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-2xl font-bold my-3">Пункт выдачи</div>
                        <div className="bg-white rounded-xl p-5 flex md:flex-row flex-col-reverse space-y-reverse md:space-y-0 space-y-5 pt-4">
                            <div className="flex flex-col flex-1">
                                <div className="px-2 flex-1">
                                    <Table data={data} />
                                </div>
                            </div>
                            <img className="lg:w-1/2 md:w-7/12 md:ml-5 self-center" src={map} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3">
                    <div className="">
                        <div className="text-2xl font-bold my-3">Статус</div>
                        <div className="px-5 py-2 bg-white rounded-xl text-center">
                            В обработке
                        </div>
                    </div>
                    <div className="">
                        <div className="text-2xl font-bold my-3">Получатель</div>
                        <div className="px-5 py-1 bg-white rounded-xl">
                            <Table data={data} />
                        </div>
                    </div>
                    <div className="">
                        <div className="text-2xl font-bold my-3">Комментарий</div>
                        <div className="p-5 bg-white rounded-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus dicta ipsa deserunt sint dolor, quia similique explicabo odio temporibus eveniet qui assumenda accusantium ad tempore, saepe odit exercitationem adipisci quis consequatur. Minima beatae inventore praesentium pariatur quidem excepturi, laudantium officiis officia suscipit sunt perferendis architecto accusamus aliquam laboriosam a?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
