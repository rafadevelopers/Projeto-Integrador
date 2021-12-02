import React from 'react'

function SearchText(props) {

    return (
        <>
            <h2 class="texto-pesquisa mb-4"> Você buscou por {props.textoPesquisa} </h2>
        </>
    )

}

export default SearchText