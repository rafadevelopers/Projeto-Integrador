import React from "react"
import { Link } from "react-router-dom"

import './OrderItem.css'

function OrderItem(props) {
    const formatDate = (date) => {
        if (date !== null){
            let arr = date.split("-")
        return `${arr[2]}/${arr[1]}/${arr[0]}`
        }
    }

    return (
        <>
            <div className="container-fluid d-flex col-12 numeroPedido">
                <div className="container-fluid  col-6 pedidosMobile">
                    <p>#<strong>{props.number}</strong></p>
                    <p>Data: <strong>{formatDate(props.order.purchaseDate)}</strong></p>
                    
                </div>
                <div className="container-fluid col-6 pedidosMobile">
                    <Link to={{
                        pathname: "/orderDetails",
                        state: { ...props.order }
                    }}>
                        <button className="btn-prinCipal ">
                            <i className="pedido">DETALHES DO PEDIDO</i>
                        </button>
                        </Link>
                        <p>Valor: <strong>{(props.order.totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>
                    
                </div>
            </div>
        </>
    )
}

export default OrderItem