import React from 'react'
import ReactInputMask from 'react-input-mask'
import Label from '../Label/Label'
import './Input.css'

function Input(props) {

    return(
        <>
        <Label label={props.label} obrigatorio={props.obrigatorio} id={props.id}/>
        <ReactInputMask mask={props.mask}
                        maskChar={null}
                        type={props.type} 
                        id={props.id}
                        name={props.name} 
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(event) => {props.changeFunction(event)}}
                        onBlur={(event) => {props.blurFunction && props.blurFunction(event, props.validation)}}
                        className={"form-control " + (props.error ? "error" : "")} 
                        disabled={props.disabled}/>
        {props.error ? <div className="form-text error-text">{props.error}</div> : ""}
        </>
    )
}

export default Input