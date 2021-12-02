import React, { useState } from "react";
import axios from 'axios';
import { Modal } from "react-bootstrap";
import useRegisterFormat from '../../../../hooks/useRegisterFormat'
import useLogin from "../../../../hooks/useLogin";
import RegisterCreditCardForm from '../../Forms/Register/RegisterCreditCardForm'
import CreditCardInfoItem from "./InfoItem/CreditCardInfoItem/CreditCardInfoItem"

function CreditCardList(props) {
    const { token, userId } = useLogin()
    const addURL = `http://localhost:8080/customers/addCreditCard/${userId}`

    const [showCreditCard, setShowCreditCard] = useState(false);
    const handleShowCreditCard = () => setShowCreditCard(true);
    const handleCloseCreditCard = () => setShowCreditCard(false);
    const { handleCreditCardCreation } = useRegisterFormat()

    const refreshPage = () => {
        window.location.reload();
    }

    const renderList = (array) => {
        let items = []
        for (let i = 0; i < array.length; i++) {
            items.push(<CreditCardInfoItem obj={array[i]} key={i} type={props.type} select={props.select} selectCreditCard={selectCreditCard} show={props.show} />)
        }
        return items
    }

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    const cancelCreditCardRegister = () => {
        handleCloseCreditCard()
    }

    const handleCreditCard = async (inputAddress) => {
        let isValid = false
        const formatedCreditCard = await handleCreditCardCreation(inputAddress)
        await axios.put(addURL, formatedCreditCard, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            handleCloseCreditCard()
            isValid = true
        }).catch(error => {
            alert(error)
        })
        if (isValid) {
            refreshPage()
        }
        return isValid

    }

    const selectCreditCard = (selectedValue) => {
        props.chooseCreditCard(selectedValue)

    }

    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                {props.title
                    ? <h3>{props.title}</h3>
                    : ""}
                <h4 className="subtitle">{props.subtitle}</h4>
                {props.show
                ? ""
                : <button class="btn-custom-default btn-principal" onClick={handleShowCreditCard}> Adicionar Cartão de Crédito</button>}
                
            </div>
            <Modal show={showCreditCard} onHide={handleCloseCreditCard} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar cartão de crédito
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterCreditCardForm save={handleCreditCard} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelCreditCardRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>
            {renderList(props.userData ? props.userData.creditCards : props.creditCards)}
        </>
    )
}

export default CreditCardList