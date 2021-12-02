import React from "react";
import './CardLogin.css'

function CardLogin(props){
    return (
        <div className={"col-12 col-md-6 col-lg-5 card-default " + (props.classes)}>
            {props.children}
        </div>
    )
}

export default CardLogin