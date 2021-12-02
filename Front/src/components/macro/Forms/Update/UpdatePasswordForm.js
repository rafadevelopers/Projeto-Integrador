import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Button from "../../../micro/Button/Button";
import Input from "../../../micro/Forms/Input/Input";
import useValidation from "../../../../hooks/useValidation";

function UpdatePasswordForm(props) {
    

    const initialValue = {
        currentPassword: "",
        password: "",
        confirmPassword: ""
    }
    const requiredFields = ["currentPassword", "password", "confirmPassword"]
    const [inputValues, setInputValues] = useState({ ...initialValue });
    const {
        errors,
        resetErrorStates,
        validateForm,
        validatePasswordNotEmpty,
        isEmpty,
        setErrors
    } = useValidation(inputValues)

    const handleSubmit = async (event) => {
        event.preventDefault();

        let values = {...inputValues}
        delete values.confirmPassword
        if (await validateForm(requiredFields)) {
            await props.updatePassword(values)
            resetForm()
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm(requiredFields)
    }

    const resetForm = () => {
        setInputValues({ ...initialValue });
        resetErrorStates();
    };
    return (
        <form onSubmit={handleSubmit}>
            <Row className="mt-5">
                <div className="mb-3"><h4>Trocar de Senha</h4></div>
                <Col md={6} className="mb-3">
                    <Input type="password" id="senhaAntiga" name="currentPassword" placeholder="Digite sua senha atual" label="Senha atual"
                        obrigatorio changeFunction={handleChange}
                        blurFunction={handleBlur} validation={isEmpty}
                        value={inputValues.currentPassword}
                        error={errors.currentPassword} />
                </Col>
                <Col md={6} className="mb-3"></Col>
                <Col md={6} className="mb-3">
                    <Input type="password" id="senha" name="password" placeholder="Digite sua nova senha" label="Digite sua nova senha"
                        obrigatorio changeFunction={handleChange}
                        blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                        value={inputValues.password}
                        error={errors.password} />
                </Col>
                <Col md={6} className="mb-3">
                    <Input type="password" id="confirmarSenha" name="confirmPassword" placeholder="Digite novamente sua nova senha" label="Confirme sua nova senha"
                        obrigatorio changeFunction={handleChange} 
                        blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                        value={inputValues.confirmPassword}
                        error={errors.confirmPassword} />
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col className="d-flex justify-content-end">
                    <Button class="btn-principal" label="Trocar senha" type="submit" />
                </Col>
            </Row>
        </form>
    )

}

export default UpdatePasswordForm