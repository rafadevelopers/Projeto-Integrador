import React, { useState, useEffect } from 'react'
import axios from 'axios'
import iconlix from '../../../assets/icons/checkout/lixeira.png'
import './ProductList.css'
import CardCart from '../../macro/CardCart/CardCart'




function ProductListHome(props) {

    const checkItemCart = (item, cartList) => {
        if (cartList.length > 0) {

            for (let i = 0; i < cartList.length; i++) {

                if (cartList[i].product.id == item.product.id) {

                    cartList[i].quantity += 1;
                    return true;
                }

            }
            return false
        }
    }

    const createItemRequest = (prod) =>{

        let itemRequest = {
            quantity : 1,
            product : {...prod}


        }

        return itemRequest;



    }


    const addToCart = (item) => {
        let cartList = localStorage.getItem("itemRequest")
            ? JSON.parse(localStorage.getItem("itemRequest"))
            : []

        let newItemRequest =  createItemRequest(item)
            
        if (!checkItemCart(newItemRequest, cartList)) {
            cartList.push(newItemRequest)
        }
        let cartString = JSON.stringify(cartList)
        localStorage.setItem("itemRequest", cartString)
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        props.setQtyCart(cartList.length)
    }

    


    const listProducts = () => {







        return props.products.map((item) => {

            return (





                <li className="list-group-item " key={item.id}>


                    <div className="row ">

                        <div className="col-4 col-md-3 col-lg-1" >
                            <img style={{ float: "left" }} className="img-thumbnail" width="100px" src={item.image} ></img>

                        </div>



                        <div class="col-8 col-md-9 col-lg-6 col-xl-5 align-self-center" >

                            <div className="text-produto-nome text-decoration-none text-danger">{item.productName}</div>

                            <small >
                                {item.descriptionProduct}
                            </small>

                        </div>



                        <div style={{ float: "left" }} class="btn-group  col-6  col-md-4 col-4 align-self-center justify-content-center " role="group" aria-label="...">

                            <button o class="  btn-custom">-</button>

                            <input style={{ textAlign: "center" }} type="text" value="1"/>


                            <button type="button" type="button" class="  btn-custom">+</button>

                            <button type="button" class="  mx-4 btn-lix-custom" ><img style={{ border: "none" }} width="25px" src={iconlix} /></button>
                        </div>



                        <div class="text-right col-6  col-md-8 col-lg-2     ">
                            <small class="text-secondary">Subtotal: {item.productPrice.value}</small><br></br>
                            <span class="text-dark">Valor Total:  {item.productPrice.value}</span>

                        </div>




                    </div>





                    {
                        props.cart
                            ? ''
                            : <button onClick={() => addToCart(item)}>Comprar</button>
                    }


                </li>





            )
        })
    }

    return (
        <ul>
            {listProducts()}
        </ul>
    )
}

export default ProductListHome