import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { CartItem } from '../types/store'
import {
    changeQuantityOfItem,
    removeFromCart
} from '../actions/cart'

import Counter from './Counter'

interface PropsFromState {
    items: CartItem[]
}

interface PropsFromDispatch {
    changeQuantityOfItem: (id: number, increment: number) => void,
    removeFromCart: (id: number) => void
}

type Props = PropsFromState & PropsFromDispatch;

const Basket = ({ items, changeQuantityOfItem, removeFromCart }: Props) => {
    const totalPrice = items.reduce((a, b) => a += b.price * b.amount, 0)

    const onIncreaseEvent = (id: number) => {
        changeQuantityOfItem(id, 1);
    }

    const onDecreaseEvent = (id: number) => {
        changeQuantityOfItem(id, -1);
    }

    const onRemoveFromCartEvent = (id: number) => {
        removeFromCart(id)
    }

    if (items.length === 0) return (
        <div className="flex flex-col items-center text-xl">
            <svg width="101" height="84" viewBox="0 0 101 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9411 25.1853L11.7894 19.5443C11.2051 16.6824 13.4124 14.0119 16.3332 14.0472V14.0472M12.9411 25.1853L97.8992 25.9529M12.9411 25.1853L15.2918 36.6991M97.8992 25.9529L98.759 21.8686C99.4039 18.8054 97.1075 15.9097 93.9779 15.8398L90.0213 15.7514M97.8992 25.9529L95.8307 35.778M95.8307 35.778L94.05 44.2365C93.5771 46.4829 91.6352 48.1186 89.3412 48.2031L86.951 48.291M95.8307 35.778L15.2918 36.6991M15.2918 36.6991L17.3276 46.6703C17.8168 49.0661 19.9669 50.7567 22.4105 50.6668L28.7681 50.4327M28.7681 50.4327L16.3332 14.0472M28.7681 50.4327L36.1369 50.1615M16.3332 14.0472L26.0048 14.3215M36.1369 50.1615L26.0048 14.3215M36.1369 50.1615L46.4225 49.7829M26.0048 14.3215L43.1987 14.7056M46.4225 49.7829L43.1987 14.7056M46.4225 49.7829L55.48 49.4495M43.1987 14.7056L55.48 14.9799M55.48 49.4495V14.9799M55.48 49.4495L66.3797 49.0483M55.48 14.9799L65.9192 15.2131M66.3797 49.0483L65.9192 15.2131M66.3797 49.0483L76.2048 48.6866M65.9192 15.2131L80.0427 15.5285M76.2048 48.6866L80.0427 15.5285M76.2048 48.6866L86.951 48.291M80.0427 15.5285L90.0213 15.7514M86.951 48.291L90.0213 15.7514" stroke="#A23231" strokeWidth="3" />
                <path d="M94.3212 63.6273H25.8177C23.4636 63.6273 21.4283 61.9851 20.9307 59.6842L11.2025 14.7023L9.74067 7.94309C9.24304 5.64215 7.20778 4 4.85365 4H0" stroke="black" strokeWidth="8" />
                <path d="M90 77C90 80.866 86.866 84 83 84C79.134 84 76 80.866 76 77C76 73.134 79.134 70 83 70C86.866 70 90 73.134 90 77ZM79.85 77C79.85 78.7397 81.2603 80.15 83 80.15C84.7397 80.15 86.15 78.7397 86.15 77C86.15 75.2603 84.7397 73.85 83 73.85C81.2603 73.85 79.85 75.2603 79.85 77Z" fill="black" />
                <path d="M41 77C41 80.866 38.0899 84 34.5 84C30.9101 84 28 80.866 28 77C28 73.134 30.9101 70 34.5 70C38.0899 70 41 73.134 41 77ZM31.575 77C31.575 78.7397 32.8846 80.15 34.5 80.15C36.1154 80.15 37.425 78.7397 37.425 77C37.425 75.2603 36.1154 73.85 34.5 73.85C32.8846 73.85 31.575 75.2603 31.575 77Z" fill="black" />
            </svg>
            <div className="mt-5 text-2xl font-bold">В корзине пока ничего нет</div>
        </div>
    )

    return (
        <div className="w-full">
            <div className="sm:flex space-x-5 px-5 text-gray-600 mb-2 text-center hidden">
                <div className="flex-1 text-left">Товар</div>
                <div className="w-28">Количество</div>
                <div className="w-28">Стоимость, ₽</div>
                <div className="w-8"></div>
            </div>
            <div className="bg-white rounded-xl px-5 divide-gray-100 divide-y text-center">
                {items.map(item => (
                    <div key={ item.productId } className="flex sm:flex-row flex-col space-x-5 py-2 items-center sm:space-y-0 space-y-3">
                        <div className="flex-1 sm:text-left">{item.title}</div>
                        <div className="w-28">
                            <Counter value={item.amount} onIncrease={() => onIncreaseEvent(item.productId)} onDecrease={() => onDecreaseEvent(item.productId)} />
                        </div>
                        <div className="w-28">{item.price * item.amount}</div>
                        <button className="w-8 h-8" onClick={() => onRemoveFromCartEvent(item.productId)}>
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
                ))}
            </div>
            <div className="sm:flex flex-row space-x-5 px-8 mt-3 text-center font-bold hidden">
                <div className="flex-1 sm:text-left"></div>
                <div className="w-28">Итого</div>
                <div className="w-28">{ totalPrice }₽</div>
                <div className="w-5"></div>
            </div>
            <div className="sm:hidden block mt-3 mr-2 text-right font-bold text-lg">Итого: { totalPrice }₽</div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    items: state.cart.items
})

export default connect(mapStateToProps, { changeQuantityOfItem, removeFromCart })(Basket)