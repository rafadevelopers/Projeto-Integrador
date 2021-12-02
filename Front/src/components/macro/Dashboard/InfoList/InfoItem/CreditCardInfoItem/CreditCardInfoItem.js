import React, { useState } from "react"
import axios from "axios"
import { Modal, ModalBody } from "react-bootstrap"
import useLogin from "../../../../../../hooks/useLogin"
import RegisterCreditCardForm from "../../../../Forms/Register/RegisterCreditCardForm"
import useRegisterFormat from "../../../../../../hooks/useRegisterFormat"


function InfoItem(props) {
    const { token, userId, refreshPage } = useLogin()
    const { handleShowCreditCard, handleCreditCardCreation } = useRegisterFormat()

    const [deleteModal, setDeleteModal] = useState(false)
    const handleCloseDeleteModal = () => setDeleteModal(false)
    const handleOpenDeleteModal = () => setDeleteModal(true)

    const [updateModal, setUpdateModal] = useState(false)
    const handleCloseUpdateModal = () => setUpdateModal(false)
    const handleOpenUpdateModal = () => setUpdateModal(true)

    let removeUrl = `http://localhost:8080/customers/removeCreditCard/?customer=${userId}&creditCard=${props.obj.id}`
    let updateUrl = `http://localhost:8080/creditCards/${props.obj.id}`

    const handleSelectCreditCard = () => {
        props.selectCreditCard(props.obj.id)
    }

    const renderCreditCardItem = (creditCard, key) => {
        return (
            <>
                <div>
                    {props.select === true
                        ? <input type="radio" value={creditCard.id} name="creditCard" onChange={handleSelectCreditCard} />
                        : ""}
                    <div className="card-lista d-flex flex-row mb-3 justify-content-between" key={key}>
                        <div className="infos-lista d-flex flex-column  mt-1">
                            <div className="nome-lista"><h5>{creditCard.cardBrand.cardBrandName}</h5></div>
                            <div className="numero-cartao"><strong>**** **** **** {creditCard.lastFourDigits ? creditCard.lastFourDigits : creditCard.cardNumber.slice(-4) }</strong></div>
                            {props.show === true
                                ? ""
                                : <div className="infos-lista d-flex flex-column  mt-1">
                                    <div><strong>Titular:</strong> {creditCard.holderName}</div>
                                    {/* <div><strong>CPF:</strong> {creditCard.cpf}</div> */}
                                    <div><strong>Validade: </strong>{creditCard.cardValidDate}</div>
                                </div>}
                        </div>
                        {props.show === true
                            ? ""
                            : <div className="d-flex flex-column align-items-end justify-content-between">
                                <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleOpenUpdateModal()}>Editar</button>
                                {props.select === true
                                    ? ""
                                    : <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleOpenDeleteModal()}>Remover</button>}
                            </div>}

                    </div>
                </div>
            </>
        )
    }

    const handleDelete = () => {
        axios.put(removeUrl, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    const handleUpdateAddress = async (inputValues) => {
        let creditCard = await handleCreditCardCreation(inputValues)

        axios.put(updateUrl, creditCard, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    return (
        <>
            <Modal show={deleteModal}>
                <Modal.Body>
                    <p className="text-center">Confirma a remoção do Cartão de crédito?</p>
                    <div className="d-flex flex-row align-items-end justify-content-around">
                        <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleCloseDeleteModal()}>Cancelar</button>
                        <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleDelete()}>Remover</button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={updateModal} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton />
                <ModalBody>
                    <RegisterCreditCardForm alter={handleShowCreditCard(props.obj)} save={handleUpdateAddress} />
                </ModalBody>
                <Modal.Footer>
                    <button className="btn-custom-default btn-cancelar align-self-center btn-ver-lista" onClick={() => handleCloseUpdateModal()}>Cancelar</button>
                </Modal.Footer>
            </Modal>
            {renderCreditCardItem(props.obj, props.key)}
        </>
    )
}

export default InfoItem