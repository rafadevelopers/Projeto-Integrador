import React, {useState} from 'react';
import { Link } from 'react-router-dom'


function CategoryAllProductsMobile(props) {

    const produtos = props.produtos || []
    const [clicou, setClicou] = useState(false)

    return (
        <>

            <div  onClick={() => setClicou(true)}> <Link to="/categoryAll" className="navegacao"> Todas as Facas </Link> </div>
            
            {clicou ? window.location.reload() : ''}
        </>
    )



}

export default CategoryAllProductsMobile