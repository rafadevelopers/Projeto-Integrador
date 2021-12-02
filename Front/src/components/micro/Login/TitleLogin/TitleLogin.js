import React from "react";
import './TitleLogin.css'

function TitleLogin(props) {
    return (
        <div className={"login-titulo text-center mt-3 " + (props.classes)}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    )
}

export default TitleLogin