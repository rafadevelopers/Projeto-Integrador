import Button from '../../components/micro/Button/Button'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from '../../components/micro/ProductList/ProductList';
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar';
import TotalValueCheckout from '../../components/micro/TotalValueCheckout/TotalValueCheckout';

function Cart(props) {
    
    const handleSubtotal = () => {
        let products = JSON.parse(localStorage.getItem("itemRequest"))
        let subtotal = 0
        if (products !== null) {
            for (let i = 0; i < products.length; i++) {
                subtotal += (products[i].quantity * products[i].product.productPrice.value)
            }
        }
        return subtotal
    }


    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    const [subtotal, setSubtotal] = useState(handleSubtotal())
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("itemRequest")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
        setIsLoading(false)
    }, [])

    if (products == null || products.length === 0) {
        return (
            <Container>
                <h1 >Meu Carrinho</h1>
                <DividingBar singleLine />
                <Row>
                    <Col className="d-flex flex-column">
                        {isLoading
                        ? <p>Loading...</p>
                        : <h4>Seu carrinho está vazio</h4>}
                        
                        <DividingBar singleLine />
                        <TotalValueCheckout info="Subtotal: " valor={subtotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />

                        <div className="align-self-end">
                            <Button navigation route="/" label="Continuar comprando" class="btn-cancelar my-3 mx-3" />
                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }


    const updateSubtotal = () => {
        setSubtotal(handleSubtotal())
    }

    return (
        <>
            <Container>
                <h1 >Meu Carrinho</h1>
                <DividingBar singleLine />
                <Row>
                    <Col className="d-flex flex-column">
                        <ProductList products={products} updateSubtotal={updateSubtotal} />
                        <DividingBar singleLine />
                        <TotalValueCheckout info="Subtotal: " valor={subtotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} />
                        <div className="align-self-end">
                            <Button navigation route="/" label="Continuar comprando" class="btn-cancelar my-3 mx-3" />
                            {products === null || products.length == 0
                                ? ""
                                : <Button navigation route="/checkout" label="Fechar pedido" class="btn-principal my-3" />}

                        </div>

                    </Col>
                </Row>
                                    
            </Container>
           
        </>
        
    )
    
}

export default Cart