import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
// import axios from 'axios'
import { Redirect } from 'react-router-dom'


function SearchBar(props) {
    const [isSent, setIsSent] = useState(false)
    const [busca, setBusca] = useState('')
    const [clicou, setClicou] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("busca", busca)
        
        setIsSent(true)
        window.location.render()
    }
    return (
        <>

            <form className="d-flex" action="/categorySearch">
                <input className="form-control me-1 inputPesquisa" name="search" type="search" placeholder="Pesquise por Produtos"
                    aria-label="Search" value={busca} required onChange={(ev) => setBusca(ev.target.value)} />

                <button className="btn btn-dark botaoBusca" type="submit" onClick={() => setClicou(true)}>

                    <svg width="20" height="28"
                        viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2057 22.7036L20.5038 18.0313C20.3515 17.8764 20.1819 17.7393 19.9983 17.6225L18.8228 16.8165C21.2407 13.8436 21.2632 9.60282 18.8769 6.60479C16.4906 3.60676 12.3325 2.65165 8.86426 4.3049C5.39601 5.95815 3.54325 9.77854 4.40287 13.5043C5.26249 17.23 8.60508 19.8668 12.4517 19.8535C14.3184 19.8541 16.1299 19.2239 17.5886 18.0664L18.4702 19.2344C18.5748 19.3849 18.6928 19.5256 18.8228 19.655L23.5248 24.3272C23.6351 24.4378 23.7853 24.5 23.9421 24.5C24.0988 24.5 24.249 24.4378 24.3594 24.3272L25.1822 23.5096C25.4053 23.2903 25.4157 22.9354 25.2057 22.7036ZM12.4517 17.5174C9.20571 17.5174 6.5743 14.9026 6.5743 11.677C6.5743 8.45147 9.20571 5.83665 12.4517 5.83665C15.6977 5.83665 18.3291 8.45147 18.3291 11.677C18.3291 13.226 17.7099 14.7115 16.6077 15.8068C15.5054 16.9021 14.0105 17.5174 12.4517 17.5174Z"
                            fill="#FFC07F" />
                    </svg>
                </button>

            </form>
           
            {isSent
                ? <Redirect to={{pathname:"/categorySearch",state:{busca}}} /> : ""}
             

        </>
    )

}

export default SearchBar