import React from 'react'
import './NotFound.css'
import Button from '../../components/micro/Button/Button'
import {Link} from 'react-router-dom'

function NotFound(props) {

    return (
        <>
            <div className="container notFound">
                <h1>Desculpe, a página que voce buscou está indisponível.</h1>
                <p>Por favor, fique a vontade para buscar outras sessões em nosso site.</p>
                <p>Por favor, escolha alguma das opçôes a seguir:</p>
                <Link to="/"><Button label="Voltar para pagina inicial" class="btn-cancelar"/></Link>
            </div>
        </>
    )
}

export default NotFound