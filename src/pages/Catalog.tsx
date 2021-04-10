import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { AppState } from '../store';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getProducts, loadMoreProducts } from '../actions/products'
import { addToCart } from '../actions/cart'
import { CartItem, ProductsState } from '../types/store';

import Filter from '../components/Filter'
import ProductCard from '../components/ProductCard'

const pCountPerLoad = 48;

interface PropsFromState {
    products: ProductsState
}

interface PropsFromDispatch {
    addToCart: (item: Omit<CartItem, "amount">) => void,
    getProducts: (limit: number, skip: number, query: string) => void,
    loadMoreProducts: (limit: number, skip: number, query: string) => void,
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps;

const Catalog = ({ history, location, products, addToCart, getProducts, loadMoreProducts }: Props) => {
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        getProducts(pCountPerLoad, skip, location.search);
    }, [location.search]);

    const onLoadMoreEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        loadMoreProducts(pCountPerLoad, skip + pCountPerLoad, location.search);
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

    return (
        <div className="container m-auto flex space-x-5 py-5 px-2">
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold">Шины</div>
                    <div className="cursor-pointer flex p-2 rounded-lg">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1C1.61081 1 1.25697 1.22581 1.09304 1.57879C0.929105 1.93178 0.984863 2.34781 1.23596 2.64517L9.14925 12.0165V21C9.14925 21.3484 9.33063 21.6718 9.62799 21.8534C9.92535 22.035 10.2958 22.0488 10.6058 21.8897L15.3073 19.477C15.6409 19.3058 15.8507 18.9623 15.8507 18.5873V12.0165L23.764 2.64517C24.0151 2.34781 24.0709 1.93178 23.907 1.57879C23.743 1.22581 23.3892 1 23 1H2Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M5 4L10 10" stroke="black" />
                        </svg>
                        <div className="ml-2">Фильтры</div>
                    </div>
                </div>
                <div className="mt-3 grid xl:grid-cols-4 lg:grid-cols-3 md:gap-5 justify-items-center grid-cols-2 gap-2">
                    {products.data.map(product => <ProductCard key={product.productId} productId={product.productId} title={product.title} price={product.price} imageUrl={product.imageUrl} onAddToCart={onAddToCartEvent} onOrder={ onOrderEvent }/>)}
                </div>
                {(!products.isLoading && products.data.length === 0) && <div className="text-2xl">Товаров по этому фильтру не найдено</div>}
                {products.loadMoreButton && (<div className="flex justify-center mt-5"><button className="py-2 px-10 w-1/4 bg-green text-white rounded-xl" onClick={onLoadMoreEvent}>Посмотреть еще</button></div>)}
            </div>
            <Filter />
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    products: state.products
})

export default connect(mapStateToProps, { getProducts, loadMoreProducts, addToCart })(Catalog);