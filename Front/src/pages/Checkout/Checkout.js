import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Modal } from 'react-bootstrap'
import moment from 'moment'
import './Checkout.css'
import ReactLoading from 'react-loading'
import Select from "../../components/micro/Forms/Select/Select";


import { Redirect } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/micro/Button/Button'
import '../../components/micro/Button/Button.css'
import useLogin from '../../hooks/useLogin'
import CheckoutProduct from '../../components/macro/Checkout/CheckoutProduct/CheckoutProduct'
import PaymentTypeForm from '../../components/macro/Checkout/PaymentTypeForm/PaymentTypeForm'
import TotalValueCheckout from '../../components/micro/TotalValueCheckout/TotalValueCheckout'
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'
import AddressList from '../../components/macro/Dashboard/InfoList/AddressList'
import CreditCardList from '../../components/macro/Dashboard/InfoList/CreditCardList'




const initialValues = {
    freightFixed: 3.55,
    purchaseDate: "",
    paymentDate: "",
    typePayment: {
        description_type_payment: null
    },
    deliveryStatus: {
        description_status_delivery: "PEDIDO EFETUADO"
    },
    address: null,
    creditCard: null,
    customer: {},
    itemRequest: [],
    installments: 1
}


function Checkout(props) {
    const { userId, token, logout, refreshPage } = useLogin()
    const getCustomerUrl = `http://localhost:8080/customers/${userId}`
    const postOrderUrl = 'http://localhost:8080/request'

    const purchaseDate = moment().format("YYYY-MM-DD")
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const itemRequest = localStorage.getItem("itemRequest") !== null ? JSON.parse(localStorage.getItem("itemRequest")) : []
    const [order, setOrder] = useState({ ...initialValues, itemRequest, purchaseDate, customer: { id: userId } })
    const [success, setSuccess] = useState(false)
    let showCreditCards = order.typePayment.description_type_payment === "Cartão de Crédito"
    let totalValue = 0;
    let finalValue = 0;

    const [errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)
    const hideErrorMessage = () => {
        setShowError(false)
        window.location.href = "http://localhost:3000/cart";
    }

    const getUser = () => axios.get(getCustomerUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            setUser({ ...response.data })
            setIsLoading(false)
        })
        .catch(error => {
            logout()
            refreshPage()
        })

    const renderUser = async () => {
        await getUser()
    }

    const postOrder = () => {
        setIsLoading(true)
        axios.post(postOrderUrl, order, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.status === 201) {
                setOrder({ ...response.data })
                localStorage.removeItem("itemRequest")
                localStorage.removeItem("qtyCart")
                setSuccess(true) 
                setIsLoading(false)
                window.location.reload()   
            }
        })
        .catch(error => {
            setErrorMessage(error.response.data.message)
            setShowError(true)
            
        })}

    useEffect(() => {
        renderUser()
    }, [])

    const renderItems = () => {
        return itemRequest.map((item, index) => {
           
            return <CheckoutProduct item={item} key={index} />
        })
    }

    const somaCalculoItems = () => {
        return itemRequest.map((item, index) => {
            totalValue += item.quantity * item.product.productPrice.value
            finalValue = totalValue + initialValues.freightFixed
        })
    }

    const chooseDeliveryAddress = (value) => {
        setOrder(prevValues => {
            return {
                ...prevValues,
                address: {
                    id: value
                }
            }
        })

    }

    const chooseCreditCard = (value) => {
        setOrder(prevValues => {
            return {
                ...prevValues,
                creditCard: {
                    id: value
                }
            }
        })
    }

    const choosePaymentType = (value) => {
        let description = value === "cartaoDeCredito" ? "Cartão de Crédito" : value

        setOrder(prevValues => {
            return {
                ...prevValues,
                typePayment: {
                    description_type_payment: description
                },
                creditCard: null
            }
        })
    }

    const validateOrder = () => {
        if (order.itemRequest.length === 0) {
            alert("Seu carrinho está vazio")
            return false
        }
        if (order.address === null) {
            alert("Selecione um endereço de entrega")
            return false
        }
        if (order.typePayment.description_type_payment === null) {
            alert("Selecione uma forma de pagamento")
            return false
        }
        if (order.typePayment.description_type_payment === "Cartão de Crédito" && order.creditCard == null) {
            alert("Selecione um cartão de crédito")
            return false
        }
        return true
    }

    const handleOrder = () => {
        if (validateOrder()) {
            postOrder()
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setOrder((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    return (
        <>
        <Modal className="modallimpo" show={isLoading} animation={false} centered dialogClassName="modal-loading">
            
            <div>
                <ReactLoading animation={false} centered show={isLoading} className="modallimpo" type={"spinningBubbles"} color="#860e1c" height={70} width={70} />
            </div>
        </Modal>
        <Modal show={showError}>
            <Modal.Body>
                <h5>{errorMessage}</h5>
                <p>Por favor, retorne ao carrinho para rever sua compra</p>
                <button onClick={hideErrorMessage} className="btn-custom-default btn-cancelar">Retornar ao carrinho</button>
            </Modal.Body>
        </Modal>
            <Container className="mb-5">
                <Row>
                    <h1> Finalizar compra </h1>
                    {somaCalculoItems()}
                    <DividingBar singleLine />
                </Row>
                <Row>
                    <Col md={6} className="mb-5">
                        <Row>
                            <AddressList type="endereço" subtitle="Endereço de entrega" userData={user} isLoading={isLoading} select chooseDeliveryAddress={chooseDeliveryAddress} />
                        </Row>
                        <DividingBar singleLine />

                        <Row>
                            <PaymentTypeForm choosePaymentType={choosePaymentType} />
                            {showCreditCards
                                ? <>
                                    <DividingBar singleLine />
                                    <CreditCardList subtitle="Cartões de crédito" userData={user} isLoading={isLoading} select chooseCreditCard={chooseCreditCard} />
                                </>
                                : ""}
                        </Row>
                        <Row>
                        {showCreditCards ?
                        <>
                        
                        <Select parcelamento id="installments" name="installments" label="Parcelamento"
                        options={[1, 2, 3, 4, 5, 6]} resultadoParcelamento={finalValue}
                        changeFunction={handleChange} value={order.installments} />
                        </> : 
                        <>
                            <p style={{display: "none"}}> {order.installments = 1} </p>
                        </>
                        }
                        
                        
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className="checkout-itens mb-3">
                            <h4 className="subtitle">Itens</h4>
                            {renderItems()}
                            <DividingBar singleLine />
                            <div className="mb-3">
                                <TotalValueCheckout numero={itemRequest.length} info={itemRequest.length == 1 ? "item" : "itens"} valor={totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                                <TotalValueCheckout info="Frete" valor={initialValues.freightFixed.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                                <DividingBar singleLine />
                                <TotalValueCheckout info="Total" valor={(totalValue + initialValues.freightFixed).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                                <button class="btn-principal btn-principal-finalizar mt-4" onClick={handleOrder} >Finalizar Compra</button>
                            </div>
                        </div>
                        <div>
                            
                            <Button navigation route="/" label="Continuar comprando" class="btn-cancelar my-3" />
                        </div>
                    </Col>
                </Row>
            </Container>
            {success
                ? <Redirect to={{
                    pathname: "/success",
                    state: { ...order }
                }} />
                : ""}
        </>

    )

}

export default Checkout