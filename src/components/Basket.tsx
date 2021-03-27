import React from 'react'
import Counter from './Counter'

export default function Basket() {
    return (
        <div className="w-full">
            <div className="sm:flex space-x-5 px-5 text-gray-600 mb-2 text-center hidden">
                <div className="flex-1 text-left">Товар</div>
                <div className="w-28">Количество</div>
                <div className="w-28">Стоимость, ₽</div>
                <div className="w-8"></div>
            </div>
            <div className="bg-white rounded-xl px-5 divide-gray-100 divide-y text-center">
                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                    <div className="flex-1 sm:text-left">Fiat / Alfa / Lancia 60 603 982</div>
                    <div className="w-28">
                        <Counter />
                    </div>
                    <div className="w-28">234234</div>
                    <button className="w-8 h-8">
                        <svg className="m-auto" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5.75V15C2.5 16.1046 3.39543 17 4.5 17H10.5C11.6046 17 12.5 16.1046 12.5 15V6.23913" stroke="#A23231" />
                            <path d="M5 8.25V14.5" stroke="#A23231" />
                            <path d="M10 8.25V14.5" stroke="#A23231" />
                            <path d="M7.5 8.25V14.5" stroke="#A23231" />
                            <path d="M0 4.5H15" stroke="black" />
                            <path d="M5 4.5V2.93675C5 2.34319 5.26365 1.78029 5.71963 1.40031L5.94373 1.21356C6.30316 0.914032 6.75623 0.75 7.2241 0.75H7.7759C8.24377 0.75 8.69684 0.914032 9.05627 1.21356L9.28037 1.40031C9.73635 1.7803 10 2.34319 10 2.93675V4.5" stroke="black" />
                        </svg>
                    </button>
                </div>
                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                    <div className="flex-1 sm:text-left">Lada 21700 3101015 01</div>
                    <div className="w-28">
                        <Counter />
                    </div>
                    <div className="w-28">12345</div>
                    <button className="w-8 h-8">
                        <svg className="m-auto" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5.75V15C2.5 16.1046 3.39543 17 4.5 17H10.5C11.6046 17 12.5 16.1046 12.5 15V6.23913" stroke="#A23231" />
                            <path d="M5 8.25V14.5" stroke="#A23231" />
                            <path d="M10 8.25V14.5" stroke="#A23231" />
                            <path d="M7.5 8.25V14.5" stroke="#A23231" />
                            <path d="M0 4.5H15" stroke="black" />
                            <path d="M5 4.5V2.93675C5 2.34319 5.26365 1.78029 5.71963 1.40031L5.94373 1.21356C6.30316 0.914032 6.75623 0.75 7.2241 0.75H7.7759C8.24377 0.75 8.69684 0.914032 9.05627 1.21356L9.28037 1.40031C9.73635 1.7803 10 2.34319 10 2.93675V4.5" stroke="black" />
                        </svg>
                    </button>
                </div>
                <div className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                    <div className="flex-1 sm:text-left">Lada 21700 3101015 01 кыер ыфкуер ыыкер ыке</div>
                    <div className="w-28">
                        <Counter />
                    </div>
                    <div className="w-28">12345</div>
                    <button className="w-8 h-8">
                        <svg className="m-auto" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5.75V15C2.5 16.1046 3.39543 17 4.5 17H10.5C11.6046 17 12.5 16.1046 12.5 15V6.23913" stroke="#A23231" />
                            <path d="M5 8.25V14.5" stroke="#A23231" />
                            <path d="M10 8.25V14.5" stroke="#A23231" />
                            <path d="M7.5 8.25V14.5" stroke="#A23231" />
                            <path d="M0 4.5H15" stroke="black" />
                            <path d="M5 4.5V2.93675C5 2.34319 5.26365 1.78029 5.71963 1.40031L5.94373 1.21356C6.30316 0.914032 6.75623 0.75 7.2241 0.75H7.7759C8.24377 0.75 8.69684 0.914032 9.05627 1.21356L9.28037 1.40031C9.73635 1.7803 10 2.34319 10 2.93675V4.5" stroke="black" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="sm:flex flex-row space-x-5 px-8 mt-3 text-center font-bold hidden">
                <div className="flex-1 sm:text-left"></div>
                <div className="w-28">Итого</div>
                <div className="w-28">3000Р</div>
                <div className="w-5"></div>
            </div>
            <div className="sm:hidden block mt-3 mr-2 text-right font-bold text-lg">Итого: 3000Р</div>
        </div>
    )
}
