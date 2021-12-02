import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import Button from '../../micro/Button/Button'
import useCart from '../../../hooks/useCart'


function Card(props) {
    const novidades = props.novidades || []
    const destaques = props.destaques || []
    const produtos = props.produtos || []

    const{
        checkItemCart,
        createItemRequest,
        addToCart
    } = useCart()

    return (

        <>
            {
                novidades.map(produto => {
                    let precoParce = (parseFloat(produto.productPrice.value) / 6)
                    precoParce = precoParce.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    let preco = (parseFloat(produto.productPrice.value))
                    preco = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    return (
                        <div className=" col-6 col-sm-6 col-md-3 col-xl-3 col-xll-3 produtoDesktop">
                            <div className="card " style={{ width: '18rem' }}>
                                <Link to={`/product/${produto.id}`}>
                                    <img src={produto.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ">
                                    <h5 className="card-title tituloProduto">{produto.productName}</h5>
                                    <div className="card-text precoProduto"> {preco}<div>Ou</div>
                                    </div>
                                    <div className="ou">6x DE  {precoParce} sem juros</div><p></p>
                                    <Link to="/cart"><button   onClick={()=> addToCart(produto)} label="Comprar" class="btn-custom-default btn-default btn-principal home-btn">Comprar</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
            {
                destaques.map(produto => {
                    let precoParce = (parseFloat(produto.productPrice.value) / 6)
                    precoParce = precoParce.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    let preco = (parseFloat(produto.productPrice.value))
                    preco = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    return (
                        <div className=" col-6 col-sm-6 col-md-3 col-xl-3 col-xll-3 produtoDesktop">
                            <div className="card " style={{ width: '18rem' }}>
                                <Link to={`/product/${produto.id}`}>
                                    <img src={produto.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ">
                                    <h5 className="card-title tituloProduto">{produto.productName}</h5>
                                    <div className="card-text precoProduto">{preco}<div>Ou</div>
                                    </div>
                                    <div className="ou">6x DE  {precoParce} sem juros</div><p></p>
                                    <Link to="/cart"><button   onClick={()=> addToCart(produto)} label="Comprar" class="btn-custom-default btn-default btn-principal home-btn">Comprar</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
             {
                produtos.map(produto => {
                    let precoParce = (parseFloat(produto.productPrice.value) / 6)
                    precoParce = precoParce.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    let preco = (parseFloat(produto.productPrice.value))
                    preco = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    return (
                        <div className=" col-6 col-sm-6 col-md-4 col-xl-3 col-xll-3 justi produtoDesktop">
                            <div className="card " style={{ width: '18rem' }}>
                                <Link to={`/product/${produto.id}`}>
                                    <img src={produto.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body ">
                                    <h5 className="card-title tituloProduto listaTudo">{produto.productName}</h5>
                                    <div className="card-text precoProduto">{preco}<div>Ou</div>
                                    </div>
                                    <div className="ou">6x DE  {precoParce} sem juros</div><p></p>
                                    <Link to="/cart"><button   onClick={()=> addToCart(produto)} label="Comprar" class="btn-custom-default btn-default btn-principal home-btn">Comprar</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Card
