import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getOrders, loadMoreOrders } from '../actions/orders'
import OrderCard from '../components/OrderCard'
import { AppState } from '../store'
import { AuthState, OrdersState } from '../types/store'
import { MaskCompare, MaskPhone, MaskTypes, PhoneToMask, RemoveMask } from '../utils/mask'
import useQuery from '../hooks/useQuery'
import { toast } from 'react-toastify'
import Skeleton from '../components/Skeleton'

const oCountPerLoad = 10;

interface PropsFromState {
    orders: OrdersState
}

interface PropsFromDispatch {
    getOrders: (telephone: string, limit: number, skip: number) => void,
    loadMoreOrders: (telephone: string, limit: number, skip: number) => void
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps;

const Orders = ({ history, orders, getOrders, loadMoreOrders }: Props) => {
    const [search, setSearch] = useState('');
    const [skip, setSkip] = useState(0);
    const telephone = useQuery().get('telephone');

    useEffect(() => {
        if (telephone) setSearch(PhoneToMask(telephone));

        return () => setSkip(0);
    }, []);

    useEffect(() => {
        if (!telephone) return;

        getOrders(telephone, oCountPerLoad, skip);

    }, [telephone]);

    const onTelephoneChangeEvent = (e: React.BaseSyntheticEvent<InputEvent, HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (e.nativeEvent.data != null && e.nativeEvent.inputType !== 'deleteContentBackward') {
            value = MaskPhone(search, e.nativeEvent.data);
        }
        setSearch(value);
    }


    const onSearchEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (search.length === 0) {
            return toast.error("Пожалуйста, укажите телефон.");
        }

        if (!MaskCompare(search, MaskTypes.Phone)) {
            return toast.error("Неверный формат телефона");
        }

        history.push(`/orders?telephone=${RemoveMask(search)}`);
    }

    const onLoadMoreEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!telephone) return;

        loadMoreOrders(telephone, oCountPerLoad, skip + oCountPerLoad);
        setSkip(skip => skip + oCountPerLoad);
    }

    return (
        <div className="container m-auto sm:px-0 px-2">
            <div className="text-4xl font-bold py-5">Просмотр заказов</div>
            <div className="w-full bg-white rounded-xl p-4 flex md:flex-row flex-col justify-between items-center">
                <div className="md:mr-5 mr-0 md:mb-0 mb-3 text-center">Введите номер телефона</div>
                <div className="space-x-5 flex flex-1 justify-end">
                    <input type="text" className="bg-gray-100 p-2 rounded-xl md:w-1/3 w-1/2 text-center" name="telephone" value={search} onChange={onTelephoneChangeEvent} />
                    <button className="bg-green md:px-10 py-2 rounded-xl md:w-auto w-1/2 text-white" onClick={onSearchEvent}>Проверить</button>
                </div>
            </div>
            { orders.orders && (
                <>
                    <div className="text-3xl font-bold py-5">Найденные заказы</div>
                    {(!orders.isLoading && orders.orders.length === 0) && <div className="text-2xl">Заказов не найдено</div>}
                </>
            )}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                {orders.isLoading && <>
                    <Skeleton className="h-64" count={1} />
                    <Skeleton className="h-64" count={1} />
                    <Skeleton className="h-64" count={1} />
                    <Skeleton className="h-64" count={1} />
                </>}
                {orders.orders.map(order => <OrderCard key={order.orderId} order={order} />)}
            </div>
            {orders.loadMoreButton && (<div className="flex justify-center mt-5"><button className="py-2 px-10 w-1/4 bg-green text-white rounded-xl mb-5" onClick={onLoadMoreEvent}>Посмотреть еще</button></div>)}
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    orders: state.orders
});

export default connect(mapStateToProps, { getOrders, loadMoreOrders })(Orders)
