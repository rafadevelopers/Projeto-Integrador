import React, { useState } from 'react'
import axios from 'axios'

function useCart(props) {
    const [qtyCart, setQtyCart] = useState(0)

    const getInventory = (productId) => {
        let inventory = 0
        const url = `http://localhost:8080/inventory/${productId}`

        return axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    inventory = response.data.quantityInventory
                    return inventory
                }
            })
            .catch(error => console.log(error))
    }

    const checkItemCart = (item, cartList, inventory) => {
        if (cartList.length > 0) {
            for (let i = 0; i < cartList.length; i++) {
                if (cartList[i].product.id == item.product.id) {
                    if (cartList[i].quantity < inventory) {
                        cartList[i].quantity += 1;
                    }
                    return true;
                }
            }
            return false
        }
    }

    const createItemRequest = (prod) => {
        let itemRequest = {
            quantity: 1,
            product: { ...prod }
        }
        return itemRequest;

    }

    const addToCart = async (item) => {
        let cartList = localStorage.getItem("itemRequest")
            ? JSON.parse(localStorage.getItem("itemRequest"))
            : []
        let inventory = await getInventory(item.id)
        if (inventory > 0) {
            let newItemRequest = createItemRequest(item)

            if (!checkItemCart(newItemRequest, cartList, inventory)) {
                cartList.push(newItemRequest)
            }

            let cartString = JSON.stringify(cartList)
            localStorage.setItem("itemRequest", cartString)
            localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
            setQtyCart(cartList.length)
            window.location.reload()
            window.location.href = "http://localhost:3000/cart";
            
        } else {
            alert("Produto sem estoque")
        }

    }

    return {
        createItemRequest,
        addToCart,
        checkItemCart,
        getInventory
    }

}

export default useCart