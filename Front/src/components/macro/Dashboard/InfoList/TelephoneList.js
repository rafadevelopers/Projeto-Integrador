import React, { useState } from "react";
import axios from 'axios';
import { Modal } from "react-bootstrap";
import useRegisterFormat from '../../../../hooks/useRegisterFormat'
import useLogin from "../../../../hooks/useLogin";
import TelephoneInfoItem from './InfoItem/TelephoneInfoItem/TelephoneInfoItem'
import RegisterTelephoneForm from '../../Forms/Register/RegisterTelephoneForm'

function TelephoneList(props) {
    const { token, userId } = useLogin()
    const addURL = `http://localhost:8080/customers/addTelephone/${userId}`

    const [showTelephone, setShowTelephone] = useState(false);
    const handleShowTelephone = () => setShowTelephone(true);
    const handleCloseTelephone = () => setShowTelephone(false);
    const { handleTelephoneCreation } = useRegisterFormat()

    const refreshPage = () => {
        window.location.reload();
    }

    const renderList = (array) => {
        let items = []
        for(let i = 0; i < array.length; i++){
            items.push(<TelephoneInfoItem obj={array[i]} key={i} type={props.type}/>)
        }
        return items
    }

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    const cancelTelephoneRegister = () => {
        handleCloseTelephone()
    }

    const handleTelephone = async (inputTelephone) => {
        let isValid = false
        const formatedTelephone = await handleTelephoneCreation(inputTelephone.telephoneTemp)
        await axios.put(addURL, formatedTelephone, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            handleCloseTelephone()
            isValid = true
        }).catch(error => {
            alert(error)
        })
        if(isValid){
            refreshPage()
        }
        return isValid
        
    }

    return (
        <>
            <div className="col-12 d-flex justify-content-between mb-4">
                <h3>Meus Telefones</h3>
                <button class="btn-custom-default btn-principal" onClick={handleShowTelephone}> Adicionar Telefone</button>
            </div>
            <Modal show={showTelephone} onHide={handleCloseTelephone} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Cadastrar Telefone
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterTelephoneForm save={handleTelephone} />
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button className="btn-custom-default btn-cancelar2" onClick={cancelTelephoneRegister}>Cancelar cadastro</button>
                </Modal.Footer>
            </Modal>
            {renderList(props.userData.telephones)}
        </>
    )
}

export default TelephoneList