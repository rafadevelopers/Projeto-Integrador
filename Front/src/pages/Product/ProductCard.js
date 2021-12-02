import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import Button from '../../components/micro/Button/Button'
import useCart from '../../hooks/useCart'
import './Product.css'
import 'react-medium-image-zoom/dist/styles.css'
import Zoom from 'react-medium-image-zoom'



function ProductCard(props) {
    const { addToCart } = useCart()


    const produto = { ...props.produto } || []
    const preco = produto.productPrice !== undefined ? produto.productPrice.value : ""
    let precoParce = (parseFloat(preco) / 6)
    let precoAvista = (parseFloat(preco))
    precoParce = precoParce.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    precoAvista = precoAvista.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    const handleCart = () => {
        addToCart(produto)
    }

    return (

        <>
            <div className="container mt-5 mb-4 produto paddProduto">
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-3 col-produto">
                    
                        
                        
                    <Zoom> <img className="imagem-produto" src={produto.image} alt={produto.productName} width="200px" /></Zoom>
                    </div>
                    <div className="col-12 col-md-6 col-lg-9">
                        {props.ultimasUnidades && props.emEstoque
                            ? <Badge className="ultimas-unidades" pill bg="dark">Últimas unidades!</Badge>
                            : ""}
                        <div className="nome-do-produto">
                            <div><b>{produto.productName}</b></div>
                        </div>
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-5">
                                <button class={props.emEstoque ? 'btn-custom-default btn-principal btn-comprar' : 'btn-custom-default btn-indisponivel btn-comprar'} onClick={() => handleCart()} disabled={props.emEstoque ? false : true}>
                                    {props.emEstoque ? "Comprar" : "Indisponível"}
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="preco">{precoAvista}</h3>
                        </div>
                        <div className="texto-cartao-credito">6x de {precoParce} sem juros no Cartão de Crédito </div>
                        <hr />
                        <div className="texto-boleto">Pagamento por Boleto </div>
                        <hr />
                        <div className="texto-pix">Pagamento por PIX </div>
                    </div>
                </div>
            </div>

            {/* <!-- ENDING PRODUTO --> */}

            {/* <!-- BEGIN DESCRICAO --> */}

            <div className="container mt-5 mb-4 produto">


                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-descricao">
                        <h3 className="mt-2">Descrição do Produto</h3>
                        <div>{produto.descriptionProduct}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-especificacoes mt-5">
                        <h3 className="mt-2"> Especificações e Dimensões </h3>
                        <ul className="listaDescricaoPdp">
                            <li> Altura: {produto.height}cm </li>
                            <li> Largura: {produto.width}cm  </li>
                            <li> Comprimento: {produto.length}cm  </li>
                            <li> Peso:{produto.weight}g </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- ENDING DESCRICAO --> */}

                {/* <!-- BEGIN AVALIACAO --> */}



            </div>

        </>
    )
}
export default ProductCard