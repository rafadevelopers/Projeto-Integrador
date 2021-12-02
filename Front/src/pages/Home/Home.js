import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Card from '../../components/macro/CardHome/Card'
import Patrocinio from '../../components/macro/Banners/Patrocinio'
import Brinox from '../../assets/imgs/banners/brinox.png'
import Pepsi from '../../assets/imgs/banners/pepsi.png'
import Tramontina from '../../assets/imgs/banners/tramontina.png'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardHomeList from '../../components/macro/CardHome/CardHomeList'





function Home(props) {
const [novidades, setNovidades] = useState([])
const [destaques, setDestaques] = useState([])

// USE EFFECT DE NOVIDADES
useEffect(() => {
    axios.get('http://localhost:8080/product/news')
    .then((response) =>{
        setNovidades(response.data)
        
    })
    .catch((error) =>{
        console.error("Aconteceu um erro!" + error)
    })
}, [])

// USE EFFECT DE DESTAQUES
useEffect(() => {
    axios.get('http://localhost:8080/product/featured')
    .then((response) =>{
        setDestaques(response.data)
        
    })
    .catch((error) =>{
        console.error("Aconteceu um erro!" + error)
    })
}, [])

    return (
        <main>
            <Banners />
            <a href="https://www.brinoxshop.com.br/" target="_blank"><Patrocinio imagem={Brinox} /></a>
            {/* <!--DESTAQUE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Nossos Destaques</h2>
            </div>
            <div className="container cards">
             
              <CardHomeList produtos={destaques}/>
            </div>

            {/* <!--BEGING SECOND BANNER --> */}
            <a href="https://www.zwilling.com.br/" target="_blank"><Patrocinio imagem={Pepsi} /></a>
            {/* <!-- NOVIDADE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Novidades</h2>
            </div>
            <div className="container cards">
           
            <CardHomeList produtos={novidades}/>
            </div>

            {/* <!-- BEGING THIRD BANNER --> */}
           <Patrocinio imagem={Tramontina} />
        </main>
    )
}

 export default Home