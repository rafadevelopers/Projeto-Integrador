import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

function Button(props) {

    const typeButton = (props) => {
        if(props.navigation){
            return (
                <Link to={props.route} className={'btn-custom-default ' + props.class}>{props.label}</Link>
            )
        }
        else {
            return (
                <button onClick={() => props.onclick}  className={"btn-custom-default " + props.class}>
                    {props.label}
                </button>
            )
        }
    }

    return(
        <>
            {typeButton(props)}
        </>
    )
}

export default Button