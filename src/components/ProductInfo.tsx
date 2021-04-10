import React, { useEffect } from 'react'
import { CartItem, ProductState } from '../types/store';
import Table, { TableRow } from './Table';

import noImage from '../assets/no-image.svg'
import NotFound from '../pages/NotFound';
import Skeleton from './Skeleton';

interface Props {
    product: ProductState,
    onOrder: (item: Omit<CartItem, "amount">) => void,
    onAddToCart: (item: Omit<CartItem, "amount">) => void,
}

export default function ProductInfo({ product, onAddToCart, onOrder }: Props) {
    return (
        <div className="w-full rounded-xl bg-white sm:py-6 sm:px-10 p-3 flex lg:flex-row flex-col lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-gray-100">
            { product.isLoading
                ? <div className="self-center lg:w-2/5 sm:w-2/3 w-full lg:mr-8 lg:mb-0 mb-8 rounded-xl animate-pulse h-96 bg-gray-200"></div>
                : <img className="self-center lg:w-2/5 sm:w-2/3 w-full lg:mr-8 lg:mb-0 mb-8 rounded-xl object-contain" src={product.data?.imageUrl || noImage} alt="" />
            }
            <div className="lg:w-3/5 w-full lg:pl-8 lg:pt-0 pt-8 flex flex-col">
                <div className="text-sm text-gray-600">{!product.isLoading && `Код товара: ${product.data?.productId}`}</div>
                <div className="text-2xl font-bold">
                    {
                        product.isLoading
                            ? <Skeleton className="h-12" count={1} />
                            : product.data?.title
                    }
                </div>
                {product.isLoading && <Skeleton className="h-6" count={5} />}
                {!product.isLoading && product.data && (
                    <Table data={
                        product.data.characteristics.reduce((accumulate: TableRow[], characteristic) => {
                            accumulate.push({ key: characteristic.name, value: characteristic.value });
                            return accumulate;
                        }, [
                            { key: "Производитель", value: product.data?.manufacturer.title },
                            { key: "Страна производителя", value: product.data?.manufacturer.country }
                        ])
                    } />
                )}
                <div className="flex-1 flex flex-col justify-end space-y-5">
                    <div className="flex space-x-5 text-center">
                        {product.isLoading
                            ? <Skeleton className="h-20" count={1} />
                            : (
                                <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                    <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Доставка:</span>
                                    Самовывоз
                                </div>
                            )
                        }
                        {product.isLoading
                            ? <Skeleton className="h-20" count={1} />
                            : (
                                <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                    <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Цена:</span>
                                    {`${product.data?.price} руб.`}
                                </div>
                            )
                        }
                    </div>
                    {!product.isLoading && product.data && (
                        <div className="flex space-x-5 text-center relative">
                            <button className="w-1/2 bg-red rounded-xl text-lg text-white py-2" 
                                onClick={() => onAddToCart({ productId: product.data?.productId as number, title: product.data?.title as string, price: product.data?.price as number })}
                            >Добавить в корзину</button>
                            <button className="w-1/2 bg-green rounded-xl text-lg text-white py-2"
                                onClick={() => onOrder({ productId: product.data?.productId as number, title: product.data?.title as string, price: product.data?.price as number })}
                            >Заказать</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
