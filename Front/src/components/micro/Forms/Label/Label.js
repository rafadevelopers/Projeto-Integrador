import React from "react";

import './Label.css'

function Label(props){
    return (
        <label className="custom-label form-label" id={props.id}>
            {props.label}{props.obrigatorio ? <span className="obrigatorio">*</span> : ''}
        </label>
    )
}

export default Label
