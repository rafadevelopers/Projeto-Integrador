import React, { useState } from "react"
import axios from "axios"
import { Modal, ModalBody } from "react-bootstrap"
import useLogin from "../../../../../../hooks/useLogin"
import RegisterAddressForm from "../../../../Forms/Register/RegisterAddressForm"
import useRegisterFormat from "../../../../../../hooks/useRegisterFormat"


function AddressInfoItem(props) {
    const { token, userId, refreshPage } = useLogin()
    const { handleShowAddress, handleAddressCreation } = useRegisterFormat()

    const [deleteModal, setDeleteModal] = useState(false)
    const handleCloseDeleteModal = () => setDeleteModal(false)
    const handleOpenDeleteModal = () => setDeleteModal(true)

    const [updateModal, setUpdateModal] = useState(false)
    const handleCloseUpdateModal = () => setUpdateModal(false)
    const handleOpenUpdateModal = () => setUpdateModal(true)

    let removeUrl = `http://localhost:8080/customers/removeAddress?customer=${userId}&address=${props.obj.id}`
    let updateUrl = `http://localhost:8080/addresses/${props.obj.id}`

    const handleSelectAddress = () => {
        props.selectAddress(props.obj.id)
    }


    const renderAddressItem = (address, key) => {
        return (
            <div>
                {props.select === true
                    ? <input type="radio" value={address.id} name="address" onChange={handleSelectAddress} />
                    : ""}
                <div className="card-lista d-flex flex-row mb-3 justify-content-between " key={key}>
                    <div className="infos-lista d-flex flex-column  mt-1">
                        <div><strong>Logradouro:</strong> {address.street}</div>
                        <div><strong>Número:</strong> {address.number}</div>
                        {address.complement !== null ? <div><strong>Complemento: </strong>{address.complement}</div> : ""}
                        <div><strong>Bairro: </strong>{address.neighborhood}</div>
                        <div><strong>CEP: </strong>{address.cep}</div>
                        <div><strong>Cidade: </strong>{address.city.cityName}/{address.state.uf}</div>
                    </div>
                    {props.show === true ? ""
                        : <div className="d-flex flex-column align-items-end justify-content-between">
                            <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleOpenUpdateModal()}>Editar</button>
                            {props.select === true
                                ? ""
                                : <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleOpenDeleteModal()}>Remover</button>}
                        </div>}

                </div>
            </div>
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

        let address = await handleAddressCreation(inputValues)
        console.log(address)
        axios.put(updateUrl, address, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => refreshPage())
    }

    return (
        <>
            <Modal show={deleteModal}>
                <Modal.Body>
                    <p className="text-center">Confirma a remoção do endereço?</p>
                    <div className="d-flex flex-row align-items-end justify-content-around">
                        <button className="btn-custom-default btn-cancelar align-self-end btn-ver-lista" onClick={() => handleCloseDeleteModal()}>Cancelar</button>
                        <button className="btn-custom-default btn-cancelar2 align-self-end btn-ver-lista" onClick={() => handleDelete()}>Remover</button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={updateModal} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton />
                <ModalBody>
                    <RegisterAddressForm alter={handleShowAddress(props.obj)} save={handleUpdateAddress} />
                </ModalBody>
                <Modal.Footer>
                    <button className="btn-custom-default btn-cancelar align-self-center btn-ver-lista" onClick={() => handleCloseUpdateModal()}>Cancelar</button>
                </Modal.Footer>
            </Modal>

            {renderAddressItem(props.obj, props.key)}

        </>
    )
}

export default AddressInfoItem