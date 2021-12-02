import React, { useState, useEffect } from 'react'
import './ProductList.css'
import CardCart from '../../macro/CardCart/CardCart'


function ProductList(props) {
    let items = JSON.parse(localStorage.getItem("itemRequest"))
    const refreshPage = () => {
        window.location.reload();
    }

    const listProducts = (items) => {

        return items.map((item, index) => {
            return (
                <>
                    <CardCart key={index} item={item} handleValues={handleValues} removeItem={removeItem} quantidade={item.quantity} descriptionProduct={item.product.descriptionProduct} productPrice={item.product.productPrice.value} productName={item.product.productName} imagem={item.product.image} />
                </>
            )
        })
    }

    const removeItem = (productId) => {
        let productList = JSON.parse(localStorage.getItem("itemRequest"))
        for(let i = 0; i < productList.length; i++){
            if(productList[i].product.id == productId){
                productList.splice(i, 1)
                break;
            }
        }
        
        localStorage.setItem("itemRequest", JSON.stringify(productList))
        localStorage.setItem("qtyCart",JSON.stringify(productList.length))
        refreshPage()
    }

    const handleValues = (value, id) => {
        let productList = JSON.parse(localStorage.getItem("itemRequest"))

        for(let i = 0; i < productList.length; i++){
            if(productList[i].product.id == id){
                productList[i].quantity = value
            }
        }

        localStorage.setItem("itemRequest", JSON.stringify(productList))
        props.updateSubtotal()
    }

    return (
        <>
            {listProducts(items)}
            
        </>
    )
}

export default ProductList