import React from 'react'
import './TotalValueCheckout.css'

function TotalValueCheckout(props) {

    return(
        <>
            <div className="col-12 col-md-6 col-lg-12 produto-preco">
                <h5 className="info-produtos"> {props.numero} {props.info} </h5>
                <h5 className="valor-produtos">{props.valor}</h5>
            </div>
        </>
    )

}

export default TotalValueCheckout