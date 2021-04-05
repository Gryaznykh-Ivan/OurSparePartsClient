import React, { useState, useEffect } from 'react'
import { AppState } from '../store';
import { connect } from 'react-redux';
import { TableRow } from '../components/Table'
import { getProduct } from '../actions/product'
import { getSimilarProducts, loadMoreSimilarProducts } from '../actions/products'

import noImage from '../assets/no-image.svg'
import Table from '../components/Table'
import ProductCard from '../components/ProductCard';
import { FIProduct, ProductsState, ProductState } from '../types/store';
import { RouteComponentProps } from 'react-router-dom';
import NotFound from './NotFound';

const pCountPerLoad = 48;

interface PropsFromState {
    product: FIProduct | null,
    products: ProductsState
}

interface PropsFromDispatch {
    getProduct: (id: number) => void,
    getSimilarProducts: (id: number, limit: number, skip: number) => void,
    loadMoreSimilarProducts: (id: number, limit: number, skip: number) => void,
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<{ id: string }>;

const Product = ({ match, product, products, getProduct, getSimilarProducts, loadMoreSimilarProducts }: Props) => {
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        setSkip(0);
        getProduct(Number(match.params.id));
        getSimilarProducts(Number(match.params.id), pCountPerLoad, 0);
    }, [match.params.id]);

    const onLoadMoreEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        loadMoreSimilarProducts(Number(match.params.id), pCountPerLoad, skip + pCountPerLoad);
        setSkip(skip => skip + pCountPerLoad);
    }

    if (!product) {
        return <NotFound />;
    }

    return (
        <div className="container m-auto md:px-0 py-5 px-2">
            <div className="w-full rounded-xl bg-white sm:py-6 sm:px-10 p-3 flex lg:flex-row flex-col lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-gray-100">
                <img className="self-center lg:w-2/5 sm:w-2/3 w-full lg:mr-8 lg:mb-0 mb-8 rounded-xl object-contain" src={product.imageUrl || noImage} alt="" />
                <div className="lg:w-3/5 w-full lg:pl-8 lg:pt-0 pt-8 flex flex-col">
                    <div className="text-sm text-gray-600">Код товара: {product.productId}</div>
                    <div className="text-2xl font-bold">{product.title}</div>
                    <Table data={
                        product.characteristics.reduce((accumulate: TableRow[], characteristic) => {
                            accumulate.push({ key: characteristic.name, value: characteristic.value });
                            return accumulate;
                        }, [
                            { key: "Производитель", value: product.manufacturer.title },
                            { key: "Страна производителя", value: product.manufacturer.country }
                        ])
                    } />
                    <div className="flex-1 flex flex-col justify-end space-y-5">
                        <div className="flex space-x-5 text-center">
                            <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Доставка:</span>
                                Самовывоз
                            </div>
                            <div className="w-1/2 bg-gray-100 rounded-xl sm:text-2xl text-lg py-8 font-bold relative">
                                <span className="absolute left-3 text-gray-600 top-1 sm:text-lg text-sm font-normal">Цена:</span>
                                {product.price} руб.
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
                    <div className="rounded-xl bg-white p-8">{product.description}</div>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="text-3xl font-bold mb-5">Получение товара</div>
                    <div className="rounded-xl bg-white p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt deleniti voluptatibus inventore dicta ratione sed? Dignissimos laboriosam sit et, nulla facere assumenda numquam dolor, molestias eos sunt incidunt, dolore voluptas dolorem. Quam, quo non reprehenderit nisi unde nemo quia doloribus quidem maiores natus, labore, ullam facilis quisquam voluptate dignissimos!</div>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="text-3xl font-bold">Подобные товары</div>
                <div className="mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:gap-5 sm:grid-cols-3 justify-items-center grid-cols-2 gap-2">
                    {products.data.map(product => <ProductCard key={product.productId} productId={product.productId} title={product.title} price={product.price} imageUrl={product.imageUrl} />)}
                    {(!products.isLoading && products.data.length === 0) && <div className="text-2xl">Товаров по этому фильтру не найдено</div>}
                </div>
                    {products.loadMoreButton && (<div className="flex justify-center mt-5"><button className="py-2 px-10 w-1/4 bg-green text-white rounded-xl" onClick={onLoadMoreEvent}>Посмотреть еще</button></div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    product: state.product.data,
    products: state.products
})

export default connect(mapStateToProps, { getProduct, getSimilarProducts, loadMoreSimilarProducts })(Product);
