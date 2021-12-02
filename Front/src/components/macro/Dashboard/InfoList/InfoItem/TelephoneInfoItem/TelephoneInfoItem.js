import React, { useState } from "react"
import axios from "axios"
import { Modal, ModalBody } from "react-bootstrap"
import useLogin from "../../../../../../hooks/useLogin"
import RegisterTelephoneForm from "../../../../Forms/Register/RegisterTelephoneForm"
import useRegisterFormat from "../../../../../../hooks/useRegisterFormat"


function TelephoneInfoItem(props) {
    const { token, userId } = useLogin()
    const {handleShowFormatedTelephone, handleTelephoneCreation} = useRegisterFormat()

    const [deleteModal, setDeleteModal] = useState(false)
    const handleCloseDeleteModal = () => setDeleteModal(false)
    const handleOpenDeleteModal = () => setDeleteModal(true)

    const [updateModal, setUpdateModal] = useState(false)
    const handleCloseUpdateModal = () => setUpdateModal(false)
    const handleOpenUpdateModal = () => setUpdateModal(true)

    let removeUrl = `http://localhost:8080/customers/removeTelephone?customer=${userId}&telephone=${props.obj.id}`
    let updateUrl = `http://localhost:8080/telephones/${props.obj.id}`

    const refreshPage = () => {
        window.location.reload();
    }

    const renderTelephoneItem = (telephone, key) => {
        return (
            <div className="card-lista d-flex flex-row mb-3 justify-content-between" key={key}>
                <div className="infos-lista d-flex flex-column  mt-1">
                    <div><strong>DDD:</strong> {telephone.ddd}</div>
                    <div><strong>Número:</strong> {telephone.phoneNumber.slice(0, 5)}-{telephone.phoneNumber.slice(-4)}</div>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-between">
                    <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleOpenUpdateModal()}>Editar</button>
                    <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista my-2" onClick={() => handleOpenDeleteModal()}>Remover</button>
                </div>
            </div>
        )
    }

    const handleDelete = () => {
        axios.put(removeUrl, {}, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    const handleUpdateTelephone = async (inputValues) => {
        console.log(inputValues)
        let telephone = await handleTelephoneCreation(inputValues.telephoneTemp)
       
        axios.put(updateUrl, telephone, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    return (
        <>
            <Modal show={deleteModal}>
                <Modal.Body>
                    <p className="text-center">Confirma a remoção do telefone?</p>
                    <div className="d-flex flex-row align-items-end justify-content-around">
                        <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleCloseDeleteModal()}>Cancelar</button>
                        <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleDelete()}>Remover</button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={updateModal} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton/>
                <ModalBody>
                    <RegisterTelephoneForm alter={handleShowFormatedTelephone(props.obj)} save={handleUpdateTelephone}/>
                </ModalBody>
                <Modal.Footer>
                    <button className="btn-custom-default btn-cancelar align-self-center btn-ver-lista" onClick={() => handleCloseUpdateModal()}>Cancelar</button>
                </Modal.Footer>
            </Modal>
            {renderTelephoneItem(props.obj, props.key)}
        </>
    )
}

export default TelephoneInfoItem