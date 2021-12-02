import React from 'react';
import Logo from '../../assets/imgs/about/7.png'


import '../About/About.css'

function About(props) {

    return (
        <>
            <div className="about">

                <div className="container col-6 logo-about teste1">
                    <div className="container col-6 imagemLogo img-fluid"></div>
                    <img className="logoAbout" src={Logo} />

                </div>
                <div className="container col-12 col-lg-6 teste1">
                    <div className="">
                        <h2 className="mb-4"> Quem somos </h2>

                        <p className="integrantes">Nós somos o mestre das facas, um site focado em cutelaria, com 4 categorias sensacionais sendo ela uma delas, 
                        churrasco para propocionar aquele corte saboroso na carne, também temos a de cozinha para garantir uma satisfação na hora de fazer aquele 
                        frango no almoço ou janta e uma salada deliciosa, também temos as facas especiais com caracteristicas únicas, e por fim para aquele 
                        amador de animes e jogos também temos replícas!
                        </p>
                        
                        <h2 className="mb-4"> Missão </h2>
                        <p className="descricao-quem-somos">
                            Nossa missão é entregar a nossos clientes uma satisfação ao fazer um churrasco, ou aquele tão desejado almoço, janta e ainda um corte sensacional nos pães pela manhã.
                        </p>
                        
                        <h2 className="mb-4"> Valores </h2>
                        <p className="descricao-quem-somos">
                            <div>
                                <p>Eficiência: Fazer sempre muito bem feito, com o melhor resultado.</p>
                                <p>Ética: Fazer o que é certo, de forma transparente e com honestidade, seja qual for a situação.</p>
                                <p>Inovação: Inovar hoje para ser melhor amanhã.</p>
                            </div>
                        </p>
                        <h2 className="mb-4"> Desenvolvido por </h2>
                        <a className="nomeIntegrante" href="https://www.linkedin.com/in/maria-kauffmann-1287b3b1/" target="_blank"> Maria Kauffmann</a>,
                        <a className="nomeIntegrante" href="https://www.linkedin.com/in/jo%C3%A3o-victor-pamplona-canada-4446b51b0/" target="_blank"> João Victor Canada</a>,
                        <a className="nomeIntegrante" href="https://www.linkedin.com/in/rafael-silva-754453207/" target="_blank"> Rafael Oliveira </a> <b>e</b>
                        <a className="nomeIntegrante" href="https://www.linkedin.com/in/hildo-paz-034010204" target="_blank"> Hildo Paz.</a>

                    </div>

                </div>






            </div>
        </>
    )


}

export default About;