import React from 'react'
import imgProduct from '../../assets/imgs/produtos/1.jpeg'
import Button from '../../components/micro/Button/Button'
import SuccessProduct from '../../components/macro/SuccessProduct/SuccessProduct'
import AddressInfoItem from '../macro/Dashboard/InfoList/InfoItem/AddressInfoItem/AddressInfoItem'

function OrderDetails(props) {
    const items = props.order.itemRequest
    const renderList = () => {
        return items.map((item, index) => {
            return <SuccessProduct item={item} key={index} valorTotal={props.order.totalValue}/>
        })
    }

    return (
        <>
            <div>
                <p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }}>Detalhes do pedido:</p>
            </div>
            <div className="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">
                <div className="d-flex flex-column">
                    {renderList()}
                    {/* <h4 className="align-self-end"> Parcelas: {props.order.installments} </h4> */}
                    <h4 className="align-self-end"> Frete: {(props.order.freightFixed).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </h4>
                    <h4 className="align-self-end"> Valor Total: {(props.order.totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </h4>   
                    <h4 className="align-self-end"> Valor Total c/Frete: <strong>{(props.order.finalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></h4>
                </div>
                
            </div>


        </>
    )

}

export default OrderDetails