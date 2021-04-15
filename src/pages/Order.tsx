import React, { useEffect, useMemo } from 'react'
import { getOrder } from '../actions/order'
import Table, { TableRow } from '../components/Table';

import noImage from '../assets/no-image.svg'
import { connect } from 'react-redux';
import { AppState } from '../store';
import { OrderState } from '../types/store';
import { RouteComponentProps } from 'react-router';
import OrderReducer from '../reducers/order';
import CartInfo from '../components/CartInfo';
import Skeleton from '../components/Skeleton';

interface PropsFromState {
    order: OrderState
}

interface PropsFromDispatch {
    getOrder: (id: number) => void
}

type Props = PropsFromState & PropsFromDispatch & RouteComponentProps<{ id: string }>;

const Order = ({ match, order, getOrder }: Props) => {


    useEffect(() => {
        const id = Number(match.params.id);
        if (id !== order.order?.orderId) {
            getOrder(id);
        }
    }, [match.params.id])

    return (
        <div className="container m-auto py-5 md:px-0 px-2">
            { order.isLoading && (
                <>
                    <Skeleton className="h-10" count={1} />
                    <div className="flex lg:flex-row flex-col lg:space-x-5">
                        <div className="lg:w-2/3 mt-2">
                        <Skeleton className="h-7" count={6} />
                        <Skeleton className="h-96 mt-2" count={1} />
                        </div>
                        <div className="lg:w-1/3 mt-2">
                        <Skeleton className="h-48" count={1} />
                        <Skeleton className="h-80" count={1} />
                        </div>
                    </div>
                </>
            )}
            { !order.isLoading && order.order && (
                <>
                    <div className="flex md:flex-row flex-col justify-between md:items-center">
                        <div className="text-4xl font-bold">Информация о заказе</div>
                        <div className="text-gray-600 text-sm">Заказ №{order.order.orderId}</div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:space-x-5">
                        <div className="lg:w-2/3">
                            <div className="">
                                <div className="text-2xl font-bold my-3">Описание заказa</div>
                                <CartInfo cart={order.order.cart} />
                            </div>
                            <div className="">
                                <div className="text-2xl font-bold my-3">Пункт выдачи</div>
                                <div className="bg-white rounded-xl p-5 flex flex-col-reverse space-y-reverse md:space-y-0 space-y-5 pt-4">
                                    <div className="flex flex-col flex-1">
                                        <div className="flex-1">
                                            <Table data={[
                                                { key: "Адрес", value: order.order.pickupPoint.address },
                                                { key: "Режим работы", value: order.order.pickupPoint.operationMode },
                                                { key: "Самовывоз", value: "Бесплатно" }
                                            ]} />
                                        </div>
                                    </div>
                                    <img className="lg:w-1/2 md:w-7/12 self-center max-h-96" src={order.order.pickupPoint.imageUrl || noImage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="">
                                <div className="text-2xl font-bold my-3">Статус</div>
                                <div className="px-5 py-2 bg-white rounded-xl text-center">
                                    {order.order.status}
                                </div>
                            </div>
                            <div className="">
                                <div className="text-2xl font-bold my-3">Получатель</div>
                                <div className="px-5 py-1 bg-white rounded-xl">
                                    <Table data={[
                                        { key: "Фамилия", value: order.order.customer.lastname },
                                        { key: "Имя", value: order.order.customer.forename },
                                        { key: "Телефон", value: order.order.customer.telephone }
                                    ]} />
                                </div>
                            </div>
                            {order.order.comment && (
                                <div className="">
                                    <div className="text-2xl font-bold my-3">Комментарий</div>
                                    <div className="p-5 bg-white rounded-xl">
                                        {order.order.comment}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    order: state.order
})

export default connect(mapStateToProps, { getOrder })(Order)
