import React from 'react'
import './OrderDetails.css'
import Button from '../../components/micro/Button/Button'
import { Link, useLocation } from 'react-router-dom'
import SuccessProduct from '../../components/macro/SuccessProduct/SuccessProduct'
import Boleto from '../../components/macro/SuccessPagePaymentForm/Boleto/Boleto'
import Pix from '../../components/macro/SuccessPagePaymentForm/Pix/Pix'

function OrderDetails(props) {
    const location = useLocation()
    const order = location.state
    const itemQty = order.itemRequest.length
    const items = order.itemRequest
    const renderList = () => {
        return items.map((item) => {
            return <SuccessProduct item={item} />
        })
    }

    const formatDate = (date) => {
        if (date !== null) {
            let arr = date.split("-")
            return `${arr[2]}/${arr[1]}/${arr[0]}`
        }
    }

    return (
        <>
            <div>
                <div class="container col-12">
                    <h1 style={{ color: '#860E1C' }}>Detalhes do pedido</h1>
                    <hr />
                </div>

                <div class="container col-12 pedido">

                    <div class="col-12 col-md-6"><h1>Pedido nº: {order.id}</h1>
                        <div class=" ">Items do pedido
                            <p className="nomeProduto">{renderList()}</p></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <h2>Endereço de Entrega</h2>
                        <p>{order.address.street}, {order.address.number}</p>
                        <p>{order.address.complement !== null
                            ? <div>{order.address.complement}</div>
                            : ""}</p>
                        <p>{order.address.neighborhood}</p>
                        <p>CEP {order.address.cep}</p>
                        {order.address.city.cityName}, {order.address.state.uf}
                        <hr />
                        <h2>Pedido</h2>
                        <div class=" pagamentos">

                            <p><div class="">Realizado em: {formatDate(order.purchaseDate)}</div></p>
                            <p><div class=""><i>Data do Pagamento: {formatDate(order.paymentDate)}</i></div></p>
                            <div class="">Valor total ({itemQty == 1 ? "1 item" : `${itemQty} itens`}): {order.totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
                        </div>
                    </div>
                    <div></div>




                </div>





                <div class="container col-12"><hr />
                    <div class=" col-12 subTitulo">
                        <svg style={{ height: '20px' }}
                            x="0px" y="0px" viewBox="0 0 426.667 426.667"
                        >
                            <g>
                                <polygon
                                    points="293.333,135.04 190.08,240.213 137.173,187.093 108.8,215.467 192.213,298.667 326.187,168.747 		">
                                </polygon>
                            </g>
                            <g>
                                <path
                                    d="M213.333,0C95.513,0,0,95.513,0,213.333s95.513,213.333,213.333,213.333s213.333-95.513,213.333-213.333 S331.154,0,213.333,0z M213.333,388.053c-96.495,0-174.72-78.225-174.72-174.72s78.225-174.72,174.72-174.72 c96.446,0.117,174.602,78.273,174.72,174.72C388.053,309.829,309.829,388.053,213.333,388.053z">
                                </path>
                            </g>
                        </svg>
                        <i class="statusPedido"> {order.deliveryStatus.description_status_delivery}</i></div>
                    <hr /></div>

                {/* <!-- TITULO PEDIDO --> */}

                <div class="efetuado">
                    <div class="container d-flex col-12 efetuado">

                        <div class=" col-6">
                            Frete
                        </div>
                        <div class=" col-6">
                            <b> Fixo</b>

                        </div>
                    </div>
                    <div class="container d-flex col-12">

                        <div class=" col-6">
                            Valor Frete:
                        </div>
                        <div class=" col-6">
                            <b>{(order.freightFixed).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                        </div>
                    </div>


                    <div class="container d-flex col-12">


                        <div class=" col-6">
                            Pagamento:

                        </div>

                        <div class=" col-6">
                            <b>{order.typePayment.description_type_payment}</b>
                        </div>


                    </div>

                    {order.installments > 1 ?
                        <>
                            <div class="container d-flex col-12">

                                <div class=" col-6">
                                    Parcelas:
                                </div>
                                <div class=" col-6">
                                    <b>{order.installments}</b>

                                </div>

                            </div>

                            <div class="container d-flex col-12">

                                <div class=" col-6">
                                    Valor de cada Parcela:
                                </div>
                                <div class=" col-6">
                                    <b>{(order.installmentsValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                                </div>
                            </div>
                        </>
                        : ""
                    }

                    <div class="container d-flex col-12">

                        <div class=" col-6">
                            Valor c/Frete:
                        </div>
                        <div class=" col-6">
                            <b>{(order.finalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>

                        </div>
                        <hr />

                    </div>
                    {order.typePayment.description_type_payment == "PIX"
                        ?
                        <>
                            <div class="container d-flex col-12">
                                <div class=" mt-4 col-6">
                                    Copiar código Pix:
                                </div>

                                <div class=" mb-1 col-6"><Pix obj={order.typePayment.description_type_payment} show /></div>

                            </div>
                        </>
                        :
                        <h5 className="text-produto-nome"></h5>
                    }



                    {order.typePayment.description_type_payment == "Boleto"
                        ?
                        <>
                            <div class="container d-flex col-12">
                                <div class=" mt-4 col-6">
                                    Boleto para pagamento:
                                </div>

                                <div class=" mb-1 col-6"><Boleto obj={order.typePayment.description_type_payment} show /></div>

                            </div>
                        </>
                        :
                        <h5 className="text-produto-nome"></h5>
                    }


                </div>
                <div className="d-flex justify-content-end container mb-3">
                    <Button navigation route="/dashboard/myOrders" class="btn-cancelar" label="Voltar" />
                </div>
            </div>
        </>
    )
}

export default OrderDetails