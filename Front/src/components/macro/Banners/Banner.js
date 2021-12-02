import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import Banner2 from '../../../assets/imgs/banners/BannerNovo2.png'
import Banner3 from '../../../assets/imgs/banners/BannerNovo1.png'
import Banner4 from '../../../assets/imgs/banners/BannerNovo4.png'
import Banner5 from '../../../assets/imgs/banners/BannerNovo3.png'
import { Link } from 'react-router-dom'

function Banner(props) {

    return (
        <>

            <div className="container carousel-custom"  >
                <Carousel variant="light">
                    <Carousel.Item>
                        <Link to="/categoryAll"><img
                            className="d-block w-100 carousel"
                            src={Banner4}
                            alt="First slide"
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/categoryAll"><img
                            className="d-block w-100 carousel"
                            src={Banner2}
                            alt="Second slide"
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/categoryAll"><img
                            className="d-block w-100 carousel"
                            src={Banner3}
                            alt="Third slide"
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/product/10"><img
                            className="d-block w-100 carousel"
                            src={Banner5}
                            alt="4 slide"
                        /></Link>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Banner