import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";
import Button from "../../../micro/Button/Button";
import Input from "../../../micro/Forms/Input/Input";
import Select from "../../../micro/Forms/Select/Select";
import useValidation from '../../../../hooks/useValidation'


const initialInputValues = {
    name: "",
    email: "",
    cpf: "",
    birthDate: "",
    genderTemp: "",
    password: "",
    confirmPassword: "",
    telephoneTemp : ""
};

function RegisterForm(props) {
    const [inputValues, setInputValues] = useState({ ...initialInputValues });
    const requiredFields = ["name", "email", "cpf", "password", "confirmPassword", "birthDate"]
    const {
        validateForm,
        resetErrorStates,
        errors,
        validateStringNotEmpty,
        validateEmailNotEmpty,
        validateCpflNotEmpty,
        validateTelephoneEmpty,
        validatePasswordNotEmpty,
        validateNotRequired,
        validateBirthday
    } = useValidation(inputValues);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            if(await props.save(inputValues)){
                resetForm()
            }
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
        setInputValues({ ...initialInputValues });
        resetErrorStates();
    };

    return (
        <>
            <form onSubmit={handleSubmit} onReset={resetForm} autocomplete="off">
                <Col md={10} lg={8} className="mx-auto">
                    <Row className="mb-3">
                        <Col>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                label="Nome completo"
                                placeholder="Digite seu nome"
                                obrigatorio
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
                                obrigatorio
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
                                placeholder="Digite seu CPF"
                                name="cpf"
                                label="CPF"
                                obrigatorio
                                changeFunction={handleChange}
                                blurFunction={handleBlur}
                                validation={validateCpflNotEmpty}
                                value={inputValues.cpf}
                                error={errors.cpf}
                                mask="999.999.999-99"
                                autocomplete="off"
                            />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input
                                type="date"
                                id="birthDate"
                                name="birthDate"
                                label="Data de nascimento"
                                obrigatorio
                                changeFunction={handleChange}
                                blurFunction={handleBlur} validation={validateBirthday}
                                value={inputValues.birthDate}
                                error={errors.birthDate}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Input type="tel" id="telephone" placeholder="(XX) XXXXX-XXXX" label="Celular" 
                                mask="(99) 99999-9999" name="telephoneTemp"
                                value={inputValues.telephoneTemp}
                                changeFunction={handleChange}
                                blurFunction={handleBlur}
                                validation={validateTelephoneEmpty}
                                error={errors.telephoneTemp}/>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Select id="gender" name="genderTemp" label="Gênero"
                                options={["Feminino", "Masculino", "Não-binário", "Outros", "Prefiro não dizer"]}
                                changeFunction={handleChange} blurFunction={handleBlur} validation={validateNotRequired}
                                value={inputValues.genderTemp} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Input type="password" id="senha" name="password" placeholder="Digite sua senha" label="Digite sua senha"
                                    obrigatorio changeFunction={handleChange} 
                                    blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                                    value={inputValues.password}
                                    error={errors.password}/>
                        </Col>
                        <Col md={6} className="mb-3">
                        <Input type="password" id="confirmarSenha" name="confirmPassword" placeholder="Digite novamente sua senha" label="Confirme sua senha"
                                    obrigatorio changeFunction={handleChange} value={inputValues.confirmPassword} blurFunction={handleBlur} validation={validatePasswordNotEmpty}
                                    error={errors.confirmPassword}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-end position-custom">
                        <Col className="d-flex justify-content-end">
                            <button class="btn-custom-default btn-cancelar mx-2"  type="reset" >Limpar</button>
                            <Button class="btn-principal" label="Cadastrar" type="submit" />
                        </Col>
                    </Row>
                </Col>
            </form>
        </>
    );
}

export default RegisterForm;
