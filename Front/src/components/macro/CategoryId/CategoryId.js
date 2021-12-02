import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'

function CategoryId(props) {

    const categorias = [...props.categorias] || []
    const [clicou, setClicou] = useState(false)

    return (
        <>
            {
                categorias.map(ctg => {
                    return (
                        <>
                            <div className="container col-2 navegacao" onClick={() => setClicou(true)}><Link to={'/category/' + ctg.id} className="navegacao"> {ctg.description_category} </Link>
                            </div>
                            {clicou ? window.location.reload() : ''}
                        </>
                    )
                })
            }


        </>
    )
}

export default CategoryId;