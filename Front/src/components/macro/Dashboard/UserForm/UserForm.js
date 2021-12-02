import React, { useState } from "react";
import ReactLoading from 'react-loading'
import { Modal } from "react-bootstrap";
import axios from "axios";
import useLogin from "../../../../hooks/useLogin";
import UpdateUserDataForm from "../../Forms/Update/UpdateUserDataForm";
import DividingBar from "../../../micro/Login/DividingBar/DividingBar";
import UpdatePasswordForm from "../../Forms/Update/UpdatePasswordForm"



function UserForm(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [ errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)
    const { token, userId } = useLogin()
    const URL = `http://localhost:8080/customers/${userId}`

    const handleCloseError = () => setShowError(false)

    const refreshPage = ()=>{
        window.location.reload();
     }

    const updateUser = async (inputValues) => {
        setIsLoading(true)
        await axios.put(URL, inputValues, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            refreshPage()
        }).catch(error => {
            if (error.response.status === 500) {
                setErrorMessage(error.response.data.message)
                setShowError(true)
            }
        })
        setIsLoading(false)
        
    }

    const updatePassword = async (inputValues) => {
        setIsLoading(true)
        let values = {...inputValues, customerId : userId}

        await axios.put('http://localhost:8080/customers/changePassword', values, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then(response => {
            if(response.status === 202){
                alert(response.data)
            }
        }).catch(error => {
            alert("Senha não confere")
           // setErrorMessage(error.response.data.message)
            setShowError(true)
        })
        setIsLoading(false)
    }
    

    if (props.isLoading) {
        return (<>
            <h3 className="mb-3">Editar meus dados</h3>
            <p>Loading...</p>
        </>)
    }
    return (
        <>
        {errorMessage 
        ? <Modal show={showError} onHide={handleCloseError}>
            <Modal.Header closeButton/>
            <Modal.Body>{errorMessage}</Modal.Body>
        </Modal>
        : ""}
        <Modal show={isLoading} animation={false} centered dialogClassName="modal-loading">
            <Modal.Body>
                <div>
                    <ReactLoading type={"spinningBubbles"} color="#860E1C" height={100} width={100} />
                </div>
            </Modal.Body>
        </Modal>
            <h3 className="mb-3">Editar meus dados</h3>
            <UpdateUserDataForm userData={props.userData} updateUser={updateUser} errorMessage={errorMessage}/>
            <DividingBar singleLine/>
            <UpdatePasswordForm updatePassword={updatePassword}/>
        </>

    )
}

export default UserForm