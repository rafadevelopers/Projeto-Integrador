import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useCart from '../../../../hooks/useCart'

import './CheckoutProduct.css'


function CheckoutProduct(props) {
    const { getInventory } = useCart()
    const [estoque, setEstoque] = useState(0)
    const [itemQty, setItemQty] = useState(props.item.quantity)

    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const handleShowMessage = () => setShowErrorMessage(true)

    const handleHideMessage = () => {
        setShowErrorMessage(false)
        window.location.href = "http://localhost:3000/cart";
    }

    const handleEstoque = async () => {
        let estoque = await getInventory(props.item.product.id)
        setEstoque(estoque)
        handleDisponibilidade(estoque)
    }

    const handleDisponibilidade = (estoque) => {
        if (estoque <= 0) {
            setErrorMessage("notAvailable")
            handleShowMessage()
        } if (estoque > 0 && itemQty > estoque) {
            setErrorMessage("notEnough")
            handleShowMessage()
        }
    }

    useEffect(() => {
        handleEstoque()
    }, [])

    return (
        <>
            <Modal show={showErrorMessage} onHide={handleHideMessage}>
                <Modal.Body>
                    {errorMessage === "notAvailable"
                        ? <>
                            <div className="d-flex flex-column">
                                <h5>Este produto não está mais disponível em estoque:</h5>
                                <div className="list-group mb-3">
                                    <div className="list-group-item">
                                        <div className="text-produto-nome text-decoration-none text-danger">{props.item.product.productName}</div>
                                    </div>
                                </div>
                                <p>Por favor, retorne ao carrinho para rever sua compra</p>
                                <button onClick={handleHideMessage} className="btn-custom-default btn-cancelar">Retornar ao carrinho</button>
                            </div>
                        </>
                        : ""}
                    {errorMessage === "notEnough"
                        ? <>
                            <div className="d-flex flex-column">
                                <h5>Este produto não está mais disponível em estoque na quantidade desejada:</h5>
                                <div className="list-group mb-3">
                                    <div className="list-group-item">
                                        <div className="text-produto-nome text-decoration-none text-danger">{props.item.product.productName}</div>
                                    </div>
                                </div>
                                <p>Por favor, retorne ao carrinho para rever sua compra</p>
                                <button onClick={handleHideMessage} className="btn-custom-default btn-cancelar">Retornar ao carrinho</button>
                            </div>
                        </>
                        : ""}


                </Modal.Body>
            </Modal>
            <Link to={`/product/${props.item.product.id}`} className="checkout-link">
                <div className="list-group-item mb-3">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <div>
                                <img width="100" src={props.item.product.image} class="img-thumbnail" alt="product-thumbnail" />
                            </div>
                            <h5 className="subtitle mx-2">{props.item.product.productName}</h5>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <p className="text-secondary">Valor unitário: {(props.item.product.productPrice.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            <p className="text-secondary">Quantidade: {props.item.quantity}</p>
                        </div>
                        <p className="align-self-end">Valor Total: {props.item.product.productPrice !== undefined ? (props.item.product.productPrice.value * props.item.quantity).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ""}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CheckoutProduct