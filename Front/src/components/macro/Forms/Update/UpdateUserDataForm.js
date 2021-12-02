import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";

import Button from "../../../micro/Button/Button";
import Input from "../../../micro/Forms/Input/Input";
import Select from "../../../micro/Forms/Select/Select";
import useValidation from "../../../../hooks/useValidation";


function UpdateUserDataForm(props) {
    const [inputValues, setInputValues] = useState({ ...props.userData});
    const {
        errors,
        validateForm,
        validateStringNotEmpty,
        validateEmailNotEmpty,
        setErrors, validateBirthday
    } = useValidation(inputValues)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (await validateForm(["name", "email"])) {
            props.updateUser(inputValues);
    
        }
    }; 

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setInputValues((prevState) => {
            return { ...prevState, [name]: value };
        });
    };

    const handleChangeGender = (event) => {
        const value = event.target.value;

        setInputValues((prevState) => {
            return { ...prevState, gender: {description : value} };
        });
    };

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm([])
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                label="Nome completo"
                                placeholder="Digite seu nome"
                                changeFunction={handleChange}
                                blurFunction={handleBlur}
                                validation={validateStringNotEmpty}
                                value={inputValues.name}
                                error={errors.name}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                label="Email"
                                placeholder="Digite seu email"
                                changeFunction={handleChange}
                                blurFunction={handleBlur}
                                validation={validateEmailNotEmpty}
                                value={inputValues.email}
                                error={errors.email}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Input
                                type="text"
                                id="cpf"
                                name="cpf"
                                label="CPF"
                                disabled
                                value={inputValues.cpf}
                                error={errors.cpf}
                                mask="999.999.999-99"
                            />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                label="Data de nascimento"
                                changeFunction={handleChange}
                                value={inputValues.birthDate}
                                blurFunction={handleBlur}
                                validation={validateBirthday}
                                error={errors.birthDate}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Select id="gender" name="genderTemp" label="Gênero"
                                options={["Feminino", "Masculino", "Não-binário", "Outros", "Prefiro não dizer"]}
                                changeFunction={handleChangeGender} 
                                update
                                value={inputValues.gender ? inputValues.gender.description : ""} />
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col className="d-flex justify-content-end">
                            <Button class="btn-principal" label="Atualizar dados pessoais" type="submit" />
                        </Col>
                    </Row>
            </form>
        </>
    );
}

export default UpdateUserDataForm
