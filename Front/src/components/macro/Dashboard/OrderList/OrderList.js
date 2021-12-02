import React from 'react'
import OrderItem from './OrderItem/OrderItem'
import './OrderList.css'

function OrderList(props){

    const renderOrderList = (orders) => {
        return orders.map(order => {
            return <OrderItem number={order.id} order={order} />
        })
    }


    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>Meus Pedidos</h3>
            </div>
            {renderOrderList(props.orders)}
        </>
    )
}

export default OrderList