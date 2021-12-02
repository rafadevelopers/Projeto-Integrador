import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Modal, Row, Col } from "react-bootstrap";
import ReactLoading from 'react-loading'
import useRegisterFormat from "../../hooks/useRegisterFormat";
import RegisterUserDataForm from '../../components/macro/Forms/Register/RegisterUserDataForm'
import RegisterAddressForm from '../../components/macro/Forms/Register/RegisterAddressForm'
import RegisterCreditCardForm from '../../components/macro/Forms/Register/RegisterCreditCardForm'
import AddressList from "../../components/macro/Dashboard/InfoList/AddressList";
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar'


import CreditCardList from "../../components/macro/Dashboard/InfoList/CreditCardList";

import './RegisterUser.css'


function RegisterUser(props) {
    const URL = "http://localhost:8080/customers/";
    const {
        handleAddressCreation,
        handleCreditCardCreation,
        handleGenderCreation,
        handleTelephoneCreation
    } = useRegisterFormat()

    const [address, setAddress] = useState("");
    const [inputAddress, setInputAddress] = useState("")
    const [creditCard, setCreditCard] = useState("")
    const [inputCreditCard, setInputCreditCard] = useState("")
    const [showAddress, setShowAddress] = useState(false);
    const [showCreditCard, setShowCreditCard] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const [formFeedback, setFormFeedback] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [done, setDone] = useState(false)

    const savedAddress = address === "" ? false : true
    const savedCreditCard = creditCard === "" ? false : true

    const handleCloseAddress = () => setShowAddress(false);
    const handleShowAddress = () => setShowAddress(true);
    const handleCloseCreditCard = () => setShowCreditCard(false);
    const handleShowCreditCard = () => setShowCreditCard(true);
    const handleCloseFeedback = () => {
        setShowFeedback(false);
        if (success) {
            setDone(true)
        }
    }



    const saveUser = async (user) => {
        setIsLoading(true)
        user = await handleObject(user)
        let formMessage = "";
        let formIsSent = false;

        await axios.post(`${URL}`, user)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    formMessage = "Usuário cadastrado com sucesso"
                    formIsSent = true
                    setAddress("")
                    setCreditCard("")
                    setSuccess(true)
                }
                if (response.status === 500) {
                    formMessage = "Erro"
                    formIsSent = false
                }
            })
            .catch(error => {
                formMessage = error.response.data.message
                formIsSent = false
            }).then(() => {
                setFormFeedback(formMessage)
            })

        setShowFeedback(true)
        setIsLoading(false)

        return formIsSent
    }

    const handleObject = (user) => {
        if (user.telephoneTemp !== "") {
            user = { ...user, telephones: [handleTelephoneCreation(user.telephoneTemp)] }
            delete user.telephoneTemp
        }

        if (user.genderTemp !== "") {
            user = { ...user, gender: handleGenderCreation(user.genderTemp) }
            delete user.genderTemp
        }

        if (address !== "") {
            user = { ...user, addresses: [{ ...address }] }
        }
        if (creditCard !== "") {
            user = { ...user, creditCards: [{ ...creditCard }] }
        }

        delete user.confirmPassword

        return user
    }

    const handleAddress = (inputAddress) => {
        setInputAddress(inputAddress)

        const formatedAddress = handleAddressCreation(inputAddress)
        setAddress({ ...formatedAddress })
        handleCloseAddress()
    }

    const handleCreditCard = (inputCreditCard) => {
        inputCreditCard.lastFourDigits = inputCreditCard.cardNumber.slice(-4)
        
        setInputCreditCard(inputCreditCard)
        
        const formatedCreditCard = handleCreditCardCreation(inputCreditCard)
        
        setCreditCard({ ...formatedCreditCard })
        handleCloseCreditCard()
    }

    const cancelAddressRegister = () => {
        setAddress("")
        handleCloseAddress()
    }

    const cancelCreditCardRegister = () => {
        setCreditCard("")
        handleCloseCreditCard()
    }

    return (
        <>
            <Modal className="modallimpo" show={isLoading} animation={false} centered dialogClassName="modal-loading">
            
                <div>
                    <ReactLoading animation={false} centered show={isLoading} className="modallimpo" type={"spinningBubbles"} color="#860e1c" height={70} width={70} />
                </div>
            </Modal>

            <Modal show={showFeedback} onHide={handleCloseFeedback} animation={false} centered>
                <Modal.Header closeButton />
                <Modal.Body>
                    <p>{formFeedback}</p>
                </Modal.Body>
            </Modal>


            <RegisterUserDataForm save={saveUser} />
            <Col>
                <Row>
                    <Col className="text-center model-position">
                        <button className={"btn-custom-default mb-2 " + (savedAddress ? "saved" : "unsaved")} onClick={handleShowAddress} >{savedAddress ? "Alterar endereço" : "Cadastrar endereço"}</button>
                        <button className={"btn-custom-default mx-3 " + (savedCreditCard ? "saved" : "unsaved")} onClick={handleShowCreditCard} >{savedCreditCard ? "Alterar Cartão de Crédito" : "Cadastrar Cartão de Crédito"}</button>
                    </Col>
                </Row>
            </Col>
            <Row>
                {savedAddress || savedCreditCard
                ? <DividingBar singleLine/>
                : ""}
                {savedAddress
                    ? <Col md={6}><AddressList show subtitle="Endereço cadastrado" addresses={[address]} /></Col>
                    : ""}
                {savedCreditCard
                    ? <Col md={6}>
                        <CreditCardList show subtitle="Cartão de crédito cadastrado" creditCards={[creditCard]} />
                        </Col>
                    : ""}
            </Row>



            <Modal show={showAddress} onHide={handleCloseAddress} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar endereço
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterAddressForm save={handleAddress} alter={savedAddress ? inputAddress : ""} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelAddressRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>
            <Modal show={showCreditCard} onHide={handleCloseCreditCard} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar cartão de crédito
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterCreditCardForm save={handleCreditCard} alter={savedCreditCard ? inputCreditCard : ""} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelCreditCardRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>

            {done
                ? <Redirect to="/login" />
                : ""}
        </>
    )
}

export default RegisterUser