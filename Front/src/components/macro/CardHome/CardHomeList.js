import React from "react";


import ProductHome from './ProductHome'


function CardHomeList(props){
    
    const renderCardList = (produtos) => {
        return produtos.map(produto => {
           return  <ProductHome produto={produto} />
        })
    }

    return (
        <>
        {renderCardList(props.produtos)}
        </>
    )
}

export default CardHomeList