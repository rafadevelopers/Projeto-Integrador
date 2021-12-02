import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import codigo_barras from '../../../../assets/imgs/paymentForm/boleto.png'



function Boleto(props) {








    const [show, setShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <Button className="mt-4 btn-custom-default btn-principal" onClick={() => setLgShow(true)}>Imprimir boleto</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Pagamento via Boleto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body  xs={12} md={12} sm={12} >

                    <Row>

                        <Col className="mt-5 d-flex justify-content-center" xs={12} md={12}>

                            <p>Utilize este código de barras e pague o boleto pelo celular</p>

                        </Col>

                        <Col className="mt-5 d-flex justify-content-center" xs={12} md={12}>

                            <img width='100%' src={codigo_barras} />

                        </Col>
                    </Row>
                    <Row>



                        <Col className="mt-3 d-flex justify-content-center" xs={12} md={12}>

                            
                         <Button href="https://drive.google.com/file/d/11gyEvmJo9M2_WDQIuoanQG_oCJONWVmS/view?usp=sharing" target="_blank" className="btn-custom-default btn-principal" >Imprimir boleto</Button>
                        
                        
                        </Col>

                        <Col className="mt-1 d-flex justify-content-center" xs={12} md={12}>


                            <p>Se o pagamento não for confirmado, não se preocupe. O pedido será cancelado automaticamente.</p>
                        </Col>



                    </Row>



                </Modal.Body>
            </Modal>






        </>
    )
}

export default Boleto







