import React from 'react'

import './OrderCode.css'


function OrderCode(props) {

    return (
        <>
            <div class="mt-4 container">
                <h1 class="mb-4" style={{ color: "#860E1C" }}>Pedido finalizado com sucesso!</h1>
                <div class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-center ">
                    <div className="teste list-group-item teste">
                        <p style={{ fontweight: "bold" }} >O numero do seu pedido é: </p>
                        <p className="numeroOrdem"> {props.order.id} </p> 
                        <p style={{ fontweight: "bold" }} >Obrigado por comprar no mestredasfacas.com.br</p>
                        <p style={{ fontweight: "bold" }}>Em breve você receberá um e-mail de confirmação com todas as informaçoes da sua compra</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderCode