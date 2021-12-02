import Button from "@restart/ui/esm/Button";
import React, { useState, useEffect, useRef } from "react";
import { Container, Modal } from "react-bootstrap";
import './pix.css'
import { Row, Col } from "react-bootstrap";
import qrcode from '../../../../assets/imgs/paymentForm/qr-code.png'
import {copyToClipboard} from 'react-copy-to-clipboard'






function Pix(props) {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copiado com sucesso!');
  };

  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <Button className="mt-4 btn-custom-default btn-principal" onClick={() => setLgShow(true)}>Gerar QR code para pagamento</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Pagamento via Pix
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row>

            <Col xs={6} md={4}>
              1° - Abra o app ou banco de sua preferência. Escolha a opção pagar com código Pix “copia e cola”, ou código QR.
            </Col>
            <Col xs={6} md={4}>
              2° - Copie e cole o código, ou escaneie o código QR com a câmera do seu celular. Confira todas as informações e autorize o pagamento.
            </Col>
            <Col xs={6} md={4}>
              3° - Você vai receber a confirmação do pagamento no seu e-mail e através dos nossos canais. E pronto!
            </Col>

          </Row>
          <Row>


            <Col className="mt-5 d-flex justify-content-center" xs={12} md={12}>

              <img width="200" src={qrcode} />

            </Col>

            <Col className="mt-3 d-flex justify-content-center" xs={12} md={12}>

            
      {
       document.queryCommandSupported('copy') &&
        <div>
         <Button onClick={copyToClipboard} className="btn-custom-default btn-principal">Copiar código Pix</Button>

              <Col className="mt-1 d-flex justify-content-center" xs={12} md={12}> {copySuccess}</Col>   
              <Col className="mt-1 d-flex justify-content-center" xs={12} md={12}>
              <div style={{opacity:'0', width:'1px' }}>
          <form  >
        <textarea 
          ref={textAreaRef}
          value='https://www.bcb.gov.br/estabilidadefinanceira/pix'
        />
      </form>
      </div> </Col>   
        </div>
      }
     
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

export default Pix


