import React from 'react'

export default function Filter() {
    return (
        <div className="md:block md:w-64 hidden">
            <div className="sticky top-5 space-y-5">
                <div className="bg-white p-4 rounded-xl">
                    <label className="font-bold text-lg" htmlFor="search">Поиск</label>
                    <input id="search" className="mt-1 px-2 py-1 w-full border-gray-200 border-2 rounded-lg text-sm" type="text" />
                </div>
                <div className="bg-white p-4 rounded-xl">
                    <div className="font-bold text-lg">Фильтры</div>
                    <div className="divide-y-2 divide-gray-100">
                        <div className="">
                            <div className="flex justify-between items-center">
                                <div className="font-bold">Цена</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className="not-hidden mb-3 flex space-x-5">
                                <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="input-min">От</label>
                                    <input className="w-full border-gray-200 border-2 rounded-lg p-1 text-sm" id="input-min" min="0" type="number" />

                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="input-max">До</label>
                                    <input className="w-full border-gray-200 border-2 rounded-lg p-1 text-sm" id="input-max" min="0" type="number" />

                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center pt-2">
                                <div className="font-bold">Производитель</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className="not-hidden space-y-1 my-2">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-red rounded-md flex justify-center items-center">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5.44444 9L11 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 border-gray-200 border-2 rounded-md"></div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 border-gray-200 border-2 rounded-md"></div>
                                    <div className="ml-3">Лиаз</div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center pt-2">
                                <div className="font-bold">Сортировка</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className="not-hidden space-y-1 my-2">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-red rounded-md flex justify-center items-center">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5.44444 9L11 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-red rounded-md flex justify-center items-center">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5.44444 9L11 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 border-gray-200 border-2 rounded-md"></div>
                                    <div className="ml-3">Лиаз</div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center pt-2">
                                <div className="font-bold">Категория</div>
                                <svg className="transform rotate-180" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7L7 1L1 7" stroke="#9D9D9D" />
                                </svg>
                            </div>
                            <div className="hidden space-y-1 my-2">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-red rounded-md flex justify-center items-center">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5.44444 9L11 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-red rounded-md flex justify-center items-center">
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L5.44444 9L11 1" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">Тайота</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-5 h-5 border-gray-200 border-2 rounded-md"></div>
                                    <div className="ml-3">Лиаз</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
