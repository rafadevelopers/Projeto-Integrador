import React from "react";
import { Link } from "react-router-dom";
import { useState} from 'react'

function CategoryIdMobile(props) {
    
    const categorias = [...props.categorias] || []
    const [clicou, setClicou] = useState(false)

    return (
        <>
        {
            categorias.map(ctg => {
                return (
                    <>
                    <div  onClick={() => setClicou(true)}><Link to={'/category/' + ctg.id} className="navegacao"> {ctg.description_category} </Link>
                    </div>
                    {clicou ? window.location.reload() : ''}
                    </>
                )
            })
        }
            
         
        </>
    )
}

export default CategoryIdMobile;