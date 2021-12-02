import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useCart from '../../../hooks/useCart'
import './CardCart.css'

import iconlix from '../../../assets/icons/checkout/lixeira.png'


function CardCart(props) {
    const { getInventory } = useCart()
    const [itemQty, setItemQty] = useState(props.item.quantity)
    const [estoque, setEstoque] = useState(0)

    const [errorMessage, setErrorMessage] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const handleShowMessage = () => setShowErrorMessage(true)
    
    const handleHideMessage = () => {
        setShowErrorMessage(false)
        if(estoque <= 0){
            handleRemove()
        } else {
            setNewItemQty(estoque)
        }
        
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
        } if(estoque > 0 && itemQty > estoque){
            setErrorMessage("notEnough")
            handleShowMessage()
        }
    }

    const handleRemove = () => {
        props.removeItem(props.item.product.id)
    }

    const addOneItem = async () => {
        if (itemQty + 1 > estoque) {
            alert("Quantidade máxima disponível em estoque")
        } else {
            props.handleValues(itemQty + 1, props.item.product.id)
            setItemQty(prevValue => prevValue + 1)
        }
    }

    const removeOneItem = async () => {
        if (itemQty > 1) {
            props.handleValues(itemQty - 1, props.item.product.id)
            setItemQty(prevValue => prevValue - 1)
        }
    }

    const setNewItemQty = (qty) => {
        props.handleValues(qty, props.item.product.id)
        setItemQty(qty)
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
                                        <div className="text-produto-nome text-decoration-none text-danger">{props.productName}</div>
                                    </div>
                                </div>
                                <button className="btn-custom-default btn-cancelar align-self-center" onClick={handleHideMessage}>Remover do Carrinho</button>
                            </div>
                        </>
                        : ""}
                        {errorMessage === "notEnough"
                        ? <>
                            <div className="d-flex flex-column">
                                <h5>Este produto não está mais disponível em estoque na quantidade desejada:</h5>
                                <div className="list-group mb-3">
                                    <div className="list-group-item">
                                        <div className="text-produto-nome text-decoration-none text-danger">{props.productName}</div>
                                    </div>
                                </div>
                                <p>Quantidade desejada: <strong>{itemQty}</strong></p>
                                <p>Quantidade disponível: <strong>{estoque}</strong></p>
                                <button className="btn-custom-default btn-cancelar align-self-center" onClick={handleHideMessage}>Alterar para quantidade disponível</button>
                            </div>
                        </>
                        : ""}


                </Modal.Body>
            </Modal>
            <div className="list-group mb-3">
                <div className="list-group-item">
                    <Link to={`/product/${props.item.product.id}`}>
                        <div className=" col-3 col-md-2 col-lg-1" >
                            <img style={{ float: "left" }} className="img-thumbnail" width="100px" src={props.imagem} ></img>
                        </div>
                    </Link>
                    <div style={{ float: "left" }} class="mt-1 mx-1 col-8 col-md- col-lg-5 col-xl-6 align-self-center" >
                        <div className="text-produto-nome text-decoration-none text-danger">{props.productName}</div>
                        <small > {props.descriptionProduct} </small>
                    </div>
                    <div style={{ float: "left" }} class="mt-3 text-right col-6  col-md-6 col-lg-2 col-xl-2      ">
                        <small class="text-secondary">Valor unitário: {props.productPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</small><br></br>
                        <span class="text-dark">Valor Total:  {(props.productPrice * itemQty).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>

                    </div>
                    <div class="btn-group mt-4  col-6  col-md-3 col-4 col-xl-2 align-self-center justify-content-end " role="group" aria-label="...">
                        <button class="btn-custom" onClick={removeOneItem}>-</button>
                        <input style={{ textAlign: "center" }} type="text" id="inc" value={itemQty} />
                        <button type="button" className="btn-custom" onClick={addOneItem}>+</button>
                        <button type="button" className="  mx-4 btn-lix-custom" onClick={handleRemove}><img style={{ border: "none" }} width="25px" src={iconlix} /></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardCart