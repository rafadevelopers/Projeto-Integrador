import React, { useState } from "react";
import { Row, Col, Container, Modal } from "react-bootstrap";
import ReactLoading from 'react-loading'
import axios from "axios";
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import useValidation from "../../../../hooks/useValidation";

const initialValue = {
    street: "",
    number: "",
    complement: "",
    cep: "",
    neighborhood: "",
    cityTemp: "",
    stateTemp: ""
}

function RegisterAddressForm(props) {
    const [addressValues, setAddressValues] = useState(props.alter ? props.alter : { ...initialValue })
    const requiredFields = ["street", "number", "cep", "neighborhood", "cityTemp", "stateTemp"]
    const {
        validateAddressForm,
        resetErrorStates,
        errors,
        validateStringNotEmpty,
        validateNotRequired,
        isEmpty,
        setErrors
    } = useValidation(addressValues);
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true)

        if (validateAddressForm(requiredFields)) {
            if (props.save(addressValues)) {
                setAddressValues({ ...initialValue });
            }
        }
        setIsLoading(false)
    }

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setAddressValues(prevValues => {
            return { ...prevValues, [name]: value }
        })

    }

    const resetForm = () => {
        setAddressValues({ ...initialValue })
        resetErrorStates()
    }

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;

        validationCallback(value, name)
        validateAddressForm(requiredFields)
    }

    const handleBlurCep = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        handleCepApi()
    }

    const handleCepApi = () => {
        let cepArr = addressValues.cep.split("-")
        const inputCep = cepArr[0] + cepArr[1]
        const url = `http://viacep.com.br/ws/${inputCep}/json/`
        axios.get(url)
            .then(response => {
                if (response.data.erro == true) {
                    setErrors(prevState => {
                        return {
                            ...prevState,
                            cep: "Valor inválido"
                        }
                    })
                }
                setAddressValues(prevValues => {
                    return {
                        ...prevValues,
                        street: response.data.logradouro,
                        neighborhood: response.data.bairro,
                        cityTemp: response.data.localidade,
                        stateTemp: response.data.uf
                    }
                })
            })
            .catch(error => {
                console.log(error.message)
                setErrors(prevState => {
                    return {
                        ...prevState,
                        cep: "Valor inválido"
                    }
                })
            })


    }


    return (
        <>
            <Modal show={isLoading} animation={false} centered dialogClassName="modal-loading">
                <Modal.Body>
                    <div>
                        <ReactLoading type={"spinningBubbles"} color="#860E1C" height={100} width={100} />
                    </div>
                </Modal.Body>
            </Modal>
            <form onSubmit={handleSubmit} onReset={resetForm}>
                <Container className="mx-auto">
                    <Row>
                        <Col md={6} className="mb-3">
                            <Input type="text" id="cep" name="cep"
                                mask="99999-999"
                                label="CEP" obrigatorio
                                placeholder="Digite seu CEP"
                                changeFunction={handleChange} value={addressValues.cep}
                                blurFunction={handleBlurCep} validation={isEmpty}
                                error={errors.cep} />
                            <a className="form-text" href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank">Não sei meu CEP</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} className="mb-3">
                            <Input type="text" id="street" name="street"
                                label="Logradouro" obrigatorio
                                placeholder="Rua, Avenida, etc."
                                changeFunction={handleChange} value={addressValues.street}
                                blurFunction={handleBlur} validation={validateStringNotEmpty}
                                error={errors.street} />
                        </Col>
                        <Col md={2} className="mb-3">
                            <Input type="text" id="number" name="number"
                                label="Número" obrigatorio
                                mask="999999" changeFunction={handleChange} value={addressValues.number}
                                blurFunction={handleBlur} validation={isEmpty}
                                error={errors.number} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-3">
                            <Input type="text" id="complement" name="complement"
                                label="Complemento" placeholder="Apartamento, Bloco, Casa (opcional)"
                                changeFunction={handleChange} value={addressValues.complement}
                                blurFunction={handleBlur} validation={validateNotRequired} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5} className="mb-3">
                            <Input type="text" id="neighborhood" name="neighborhood"
                                label="Bairro" obrigatorio
                                changeFunction={handleChange} value={addressValues.neighborhood}
                                blurFunction={handleBlur} validation={validateStringNotEmpty}
                                error={errors.neighborhood} />
                        </Col>
                        <Col md={5} className="mb-3">
                            <Input type="text" id="city" name="cityTemp"
                                label="Cidade" obrigatorio
                                changeFunction={handleChange} value={addressValues.cityTemp}
                                blurFunction={handleBlur} validation={validateStringNotEmpty}
                                error={errors.cityTemp} disabled/>
                        </Col>
                        <Col md={2} className="mb-3">
                            <Input type="text" id="state" name="stateTemp"
                                label="UF" obrigatorio
                                mask="aa"
                                changeFunction={handleChange} value={addressValues.stateTemp}
                                blurFunction={handleBlur} validation={isEmpty}
                                error={errors.stateTemp} disabled/>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-end">
                        <Col className="d-flex justify-content-end">
                            <button class="btn-custom-default btn-cancelar mx-2" type="reset" >Limpar</button>
                            <Button class="btn-principal" label="Salvar" type="submit" />
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}

export default RegisterAddressForm