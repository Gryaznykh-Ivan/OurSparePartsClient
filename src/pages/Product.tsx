import React, { useState, useEffect, useRef, Fragment } from 'react'
import parse from 'html-react-parser'
import { toast } from 'react-toastify'
import { AppState } from '../store';
import { connect } from 'react-redux';
import { getProduct } from '../actions/product'
import { addToCart } from '../actions/cart'
import { getSimilarProducts, loadMoreSimilarProducts } from '../actions/products'

import ProductCard from '../components/ProductCard';
import { CartItem, FIProduct, ProductsState, ProductState } from '../types/store';
import { RouteComponentProps } from 'react-router-dom';
import NotFound from './NotFound';
import ProductInfo from '../components/ProductInfo';
import Skeleton from '../components/Skeleton';

const pCountPerLoad = 48;

interface PropsFromState {
    isLoading: boolean,
    product: ProductState,
    products: ProductsState
}

interface PropsFromDispatch {
    addToCart: (item: Omit<CartItem, "amount">) => void,
    getProduct: (id: number) => void,
    getSimilarProducts: (id: number, limit: number, skip: number) => void,
    loadMoreSimilarProducts: (id: number, limit: number, skip: number) => void,
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<{ id: string }>;

const Product = ({ history, match, isLoading, product, products, addToCart, getProduct, getSimilarProducts, loadMoreSimilarProducts }: Props) => {
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

    const onAddToCartEvent = (item: Omit<CartItem, "amount">) => {
        toast.success("Товар добавлен в корзину");
        addToCart(item);
    }

    const onOrderEvent = (item: Omit<CartItem, "amount">) => {
        addToCart(item);
        history.push('/cart');
    }

    if (!product.isLoading && !product.data) return <NotFound />;

    return (
        <div className="container m-auto md:px-0 py-5 px-2">
            <ProductInfo product={product} onAddToCart={onAddToCartEvent} onOrder={ onOrderEvent } />
            <div className="flex lg:flex-row flex-col mt-5 lg:space-y-0 lg:space-x-8 space-y-5">
                <div className="lg:w-2/3 w-full">
                    <div className="text-3xl font-bold mb-5">Описание</div>
                    <div className="flex flex-col rounded-xl bg-white p-8" >
                        {product.isLoading && <Skeleton count={8} />}
                        {product.data && parse(product.data?.description)}
                    </div>
                </div>
                <div className="lg:w-1/3 w-full">
                    <div className="text-3xl font-bold mb-5">Получение товара</div>
                    <div className="rounded-xl bg-white p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deserunt deleniti voluptatibus inventore dicta ratione sed? Dignissimos laboriosam sit et, nulla facere assumenda numquam dolor, molestias eos sunt incidunt, dolore voluptas dolorem. Quam, quo non reprehenderit nisi unde nemo quia doloribus quidem maiores natus, labore, ullam facilis quisquam voluptate dignissimos!</div>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <div className="text-3xl font-bold">Подобные товары</div>
                <div className="mt-5 grid xl:grid-cols-5 lg:grid-cols-4 md:gap-5 sm:grid-cols-3 justify-items-center grid-cols-2 gap-2">
                    {products.data.map(product => <ProductCard key={product.productId} productId={product.productId} title={product.title} price={product.price} imageUrl={product.imageUrl} onAddToCart={onAddToCartEvent} onOrder={ onOrderEvent }/>)}
                </div>
                {(!products.isLoading && products.data.length === 0) && <div className="text-2xl">Похожих товаров нет</div>}
                {products.loadMoreButton && (<div className="flex justify-center mt-5"><button className="py-2 px-10 w-1/4 bg-green text-white rounded-xl" onClick={onLoadMoreEvent}>Посмотреть еще</button></div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    product: state.product,
    products: state.products
})

export default connect(mapStateToProps, { getProduct, getSimilarProducts, loadMoreSimilarProducts, addToCart })(Product);
