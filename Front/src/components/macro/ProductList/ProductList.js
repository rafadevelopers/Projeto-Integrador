import React from 'react'
import Card from '../CardHome/Card'


function ProductList(props) {

    const produtos = props.produtos || []
    return (
        <>{
            produtos.map(item => {
                return (<Card key={item.id} path={'/product/' + item.id}
                nomeProduto={item.name} preco={item.productPrice.value} img={item.image} buttonPath={'/product/' + item.id} />)
            })

        }
        </>
    )
}

export default ProductList