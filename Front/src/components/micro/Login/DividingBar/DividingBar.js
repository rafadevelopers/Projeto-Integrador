import React from "react";

import './DividingBar.css'

function DividingBar(props) {
    if (props.singleLine){
        return (
            <div className="divisao row my-3">
            <div className="col-12"><hr /></div>
        </div>
        )
    }
    return (
        <div className="divisao row my-3">
            <div className="col-5"><hr /></div>
            <div className="col-2 text-center">{props.label}</div>
            <div className="col-5"><hr /></div>
        </div>
    )
}

export default DividingBar