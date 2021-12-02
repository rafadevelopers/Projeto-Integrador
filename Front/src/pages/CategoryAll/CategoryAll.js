import React, { useEffect, useState } from "react";
import axios from 'axios'
import './CategoryAll.css'
import '../../components/micro/Button/Button.css'
import Card from '../../components/macro/CardHome/Card'
import '../../components/macro/CardHome/Card.css'
import CardHomeList from "../../components/macro/CardHome/CardHomeList";




function Category(props) {
    const [produtos, setProdutos] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:8080/product/')
            .then((response) => {
                setProdutos(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error("Aconteceu um erro!" + error)
            })
    }, [])

    const UrlAsc = 'http://localhost:8080/product/orderAsc'
    const UrlDesc = 'http://localhost:8080/product/orderDesc'

    const getAsc = () => axios.get(UrlAsc, {
    })
    .then(response => {
            setProdutos(response.data)
        })
        .catch((error) => {
            console.error("Aconteceu um erro!" + error)
        })

    const getDesc = () => axios.get(UrlDesc, {
    })
    .then(response => {
            setProdutos(response.data)
        })
        .catch((error) => {
            console.error("Aconteceu um erro!" + error)
        })

    return (
        <>
            <main>

                {/* <!-- BEGIN FILTROS --> */}

                <div class="container mt-5 mb-4">
                    <div class="row">
                        <h2 class="texto-pesquisa mb-4"> Você pesquisou por Todas as Facas </h2>
                    </div>
                    <div class="row">

                        {/* <!-- BEGIN CATALOGO PRODUTOS --> */}

                        <div class="container catalogo-produtos">
                            <div class="row linha-produtos-encontrados">
                                <h5 class="produtos-encontrados"> Produtos Encontrados: </h5>
                                <div class="dropdown drop-ordena">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Ordenar por:
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" onClick={getDesc}> Maior Preço </a></li>
                                        <li><a class="dropdown-item" onClick={getAsc}> Menor Preço </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row catalogo-produtos2 lista">

                                <div className="container lista">
                                    {isLoading
                                    ? <p>Loading...</p>
                                    : <CardHomeList produtos={produtos} />}
                                    
                                </div>

                            </div>

                            {/* /* <!-- ENDING CATALOGO PRODUTOS --> */}



                        </div>

                    </div>
                </div>

            </main>

        </>
    )
}

export default Category