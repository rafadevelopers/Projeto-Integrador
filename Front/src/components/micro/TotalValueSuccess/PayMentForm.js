import React from 'react'
import imgfrete from '../../../assets/imgs/Frete/Correios.png'
import CreditCardInfoItem from '../../macro/Dashboard/InfoList/InfoItem/CreditCardInfoItem/CreditCardInfoItem'
import AddressInfoItem from '../../macro/Dashboard/InfoList/InfoItem/AddressInfoItem/AddressInfoItem'
import Button from '../Button/Button'
import Pix from '../../macro/SuccessPagePaymentForm/Pix/Pix'
import Boleto from '../../macro/SuccessPagePaymentForm/Boleto/Boleto'

function PaymenteForm(props) {

    return (
        <>
            <div>
                <p style={{ fontweight: "bold", color: "#860E1C", fontsize: "24px" }}>Forma de pagamento e entrega:</p>
            </div>

            <div class="shadow p-3 mb-5 bg-white rounded list-group list-group-horizontal-md d-flex justify-content-around">
                <div className="teste list-group-item d-flex flex-column">
                    <h3 className="text-produto-nome">Forma de Pagamento</h3>


                    {props.order.creditCard !== null
                        ?
                        <>
                            <CreditCardInfoItem obj={props.order.creditCard} show />
                            <h3 className="text-produto-nome">Parcelamento</h3>
                            <h5> {props.order.installments}x de {(props.order.installmentsValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </h5>
                        </>
                        :
                        <h5 className="text-produto-nome">{props.order.typePayment.description_type_payment}</h5>
                    }
                    

                    {props.order.typePayment.description_type_payment == "PIX"
                        ?
                        <>
                            <Pix obj={props.order.typePayment.description_type_payment} show />
                        </>
                        :
                        <h5 className="text-produto-nome"></h5>
                    }

                    {props.order.typePayment.description_type_payment == "Boleto"
                        ?
                        <>
                            <Boleto obj={props.order.typePayment.description_type_payment} show />
                        </>
                        :
                        <h5 className="text-produto-nome"></h5>
                    }


                </div>
                <div className="teste list-group-item d-flex flex-column justify-content-center">
                    <div>
                        <h3 className="text-produto-nome">Endereço de entrega</h3>
                        <AddressInfoItem obj={props.order.address} show />
                    </div>
                </div>
                <div className="teste list-group-item align-self-md-end">
                    <img className="" src={imgfrete} width="100" />
                    <p style={{ fontweight: "bold", fontsize: "18px" }} class="mt-2">Expresso: <br></br>   5 dias uteis a partir da confirmação do pagamento</p>
                    <div>
                        <Button navigation route='/dashBoard/myOrders' label='Meus pedidos' class='btn-cancelar mx-1 mb-3' sytle={{ width: "100%" }} />
                        <Button navigation route='/' label='Realizar uma nova compra' class='btn-principal' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymenteForm