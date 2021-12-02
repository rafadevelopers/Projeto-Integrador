import React from 'react'
import './Patrocinio.css'

function Patrocinio(props) {
    return (
        <>
            <div class="container d-flex banner1">
                <div class="container col-5 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <img src={props.imagem} class="d-block w-100 patrocinio img-fluid" />
                </div>
                <div class="container col-5 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <img src={props.imagem}  class="d-block w-100 patrocinio img-fluid" />
                </div>
            </div>
        </>
    );
}

export default Patrocinio
