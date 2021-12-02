import React, {useState} from 'react';
import { Link } from 'react-router-dom'


function CategoryAllProducts(props) {

    const produtos = props.produtos || []
    const [clicou, setClicou] = useState(false)

    return (
        <>
            
            {props.allFooter 
            ?
            <p onClick={() => setClicou(true)}> <Link to="/categoryAll" className="footer linkFooter"> Todas as Facas </Link> </p>
            : 
            <div className=" col-2 navegacao" onClick={() => setClicou(true)}> <Link to="/categoryAll" className="navegacao"> Todas as Facas </Link> </div>
            }

            {clicou ? window.location.reload() : ''}
        </>
    )



}

export default CategoryAllProducts