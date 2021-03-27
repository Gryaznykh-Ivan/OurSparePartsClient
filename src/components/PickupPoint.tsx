import React from 'react'

import map from '../assets/map.jpg'
import Table, { TableRow } from './Table'

const data: Array<TableRow> = [{
    key: "Адрес:",
    value: "г.Димитровград, ул.свирская, дом 20 "
},
{
    key: "Режим работы:",
    value: "Ежедневно 10:00 - 21:00"
},
{
    key: "Самовывоз:",
    value: "Бесплатно"
}];

export default function PickupPoint() {
    return (
        <div className="bg-white rounded-xl p-5 divide-gray-100 divide-y pt-0">
            <div className="w-full py-3 flex justify-between items-center">
                <div className="">г.Димитровград, ул.свирская, дом 20 </div>
                <button className="p-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.72874 4.22874L4.75 3.25C4.33579 2.83579 3.66421 2.83579 3.25 3.25C2.83579 3.66421 2.83579 4.33579 3.25 4.75L4.22874 5.72874C4.67719 6.17719 4.74677 6.87984 4.39497 7.40754C4.14822 7.77768 3.7328 8 3.28795 8H2C1.44772 8 1 8.44772 1 9C1 9.55229 1.44772 10 2 10H3.28795C3.7328 10 4.14822 10.2223 4.39497 10.5925C4.74677 11.1202 4.6772 11.8228 4.22874 12.2713L3.25 13.25C2.83579 13.6642 2.83579 14.3358 3.25 14.75C3.66421 15.1642 4.33579 15.1642 4.75 14.75L5.72874 13.7713C6.17719 13.3228 6.87984 13.2532 7.40754 13.605C7.77768 13.8518 8 14.2672 8 14.712V16C8 16.5523 8.44772 17 9 17C9.55229 17 10 16.5523 10 16V14.712C10 14.2672 10.2223 13.8518 10.5925 13.605C11.1202 13.2532 11.8228 13.3228 12.2713 13.7713L13.25 14.75C13.6642 15.1642 14.3358 15.1642 14.75 14.75C15.1642 14.3358 15.1642 13.6642 14.75 13.25L13.5161 12.0161C13.1998 11.6998 13.0894 11.2319 13.2308 10.8075C13.3916 10.3253 13.8429 10 14.3512 10H16C16.5523 10 17 9.55229 17 9C17 8.44772 16.5523 8 16 8H14.3512C13.8429 8 13.3916 7.67471 13.2308 7.19245C13.0894 6.76807 13.1998 6.30019 13.5161 5.98388L14.75 4.75C15.1642 4.33579 15.1642 3.66421 14.75 3.25C14.3358 2.83579 13.6642 2.83579 13.25 3.25L12.2713 4.22874C11.8228 4.67719 11.1202 4.74677 10.5925 4.39497C10.2223 4.14822 10 3.7328 10 3.28795V2C10 1.44772 9.55229 1 9 1C8.44772 1 8 1.44772 8 2V3.28795C8 3.7328 7.77768 4.14822 7.40754 4.39497C6.87984 4.74677 6.1772 4.6772 5.72874 4.22874Z" stroke="black" />
                        <circle cx="9" cy="9" r="2.5" stroke="black" />
                    </svg>
                </button>
            </div>
            <div className="flex md:flex-row flex-col-reverse space-y-reverse md:space-y-0 space-y-5 pt-4">
                <div className="flex flex-col flex-1">
                    <select className="w-full py-3 px-3 bg-gray-100 rounded-xl" id="">
                        <option value="1">г.Димитровград, ул.свирская, дом 20 </option>
                        <option value="2">г.Димитровград, ул.свирская, дом 21 </option>
                        <option value="3">г.Димитровград, ул.свирская, дом 22 </option>
                    </select>
                    <div className="px-2 flex-1">
                        <Table data={data} />
                    </div>
                    <button className="w-full bg-green rounded-xl text-white py-2">Выбрать</button>
                </div>
                <img className="lg:w-2/6 md:w-5/12 md:ml-5 self-center" src={map} alt="" />
            </div>
        </div>
    )
}
