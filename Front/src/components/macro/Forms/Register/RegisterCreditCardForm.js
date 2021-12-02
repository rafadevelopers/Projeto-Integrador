import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import cardValidator from 'card-validator'
import Input from "../../../micro/Forms/Input/Input";
import Button from "../../../micro/Button/Button";
import useValidation from "../../../../hooks/useValidation";



const initialInputValues = {
    cardNumber: "",
    lastFourDigits: "",
    cvv: "",
    cardValidDate: "",
    cpf: "",
    holderName: "",
    cardBrandTemp: ""
}

function RegisterCreditCardForm(props) {
    const [creditCardValues, setCreditCardValues] = useState(props.alter ? props.alter : { ...initialInputValues })
    const requiredFields = props.alter ? ["cpf", "holderName", "cardValidDate"] : ["cardNumber", "cpf", "holderName", "cardBrandTemp", "cardValidDate", "cvv"]
    const {
        validateForm,
        resetErrorStates,
        errors,
        validateStringNotEmpty,
        validateCpflNotEmpty,
        isEmpty,
        validateCreditCardDate,
    } = useValidation(creditCardValues)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(requiredFields)) {
            if (props.save(creditCardValues)) {
                setCreditCardValues({ ...initialInputValues });
            }
        }
    }

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setCreditCardValues(prevValues => {
            return { ...prevValues, [name]: value }
        })
    }

    const handleChangeDate = (event) => {
        const value = event.target.value
        const name = event.target.name

        setCreditCardValues(prevValues => {
            return { ...prevValues, [name]: value }
        })

        validateCreditCardDate(value, name)
    }


    const resetForm = () => {
        setCreditCardValues({ ...initialInputValues })
        resetErrorStates()
    }

    const handleBlur = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        validateForm(requiredFields)
    }

    const handleBlurNumber = (event, validationCallback) => {
        const value = event.target.value;
        const name = event.target.name;
        validationCallback(value, name)
        checkCardBrand()
    }

    const checkCardBrand = () => {
        let numberValidation = cardValidator.number(creditCardValues.cardNumber)

        if (numberValidation.isValid) {
            let brand = numberValidation.card.type.toUpperCase()
            setCreditCardValues(prevState => {
                return {
                    ...prevState,
                    cardBrandTemp: numberValidation.card.type.toUpperCase()
                }
            })
            isEmpty(brand, "cardBrandTemp")
        } else {
            setCreditCardValues(prevState => {
                return {
                    ...prevState,
                    cardBrandTemp: ""
                }
            })
            isEmpty("", "cardBrandTemp")
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} onReset={resetForm} autocomplete="off">
                <Container className="mx-auto">
                    <Row>
                        <Col md={8} className="mb-3">
                            <Input type="text" id="cardNumber" name="cardNumber"
                                mask={props.alter ? "" : "9999 9999 9999 9999"}
                                label="Cartão de crédito" obrigatorio
                                placeholder="Digite o número do cartão"
                                changeFunction={handleChange} value={props.alter ? ("**** **** **** " + creditCardValues.lastFourDigits) : creditCardValues.cardNumber}
                                blurFunction={handleBlurNumber} validation={isEmpty}
                                error={errors.cardNumber} disabled={props.alter ? true : false} />
                        </Col>
                        <Col md={2} className="mb-3">
                            <Input type="text" id="cardValidDate" name="cardValidDate"
                                mask="99/99" label="Validade" obrigatorio
                                changeFunction={handleChangeDate} value={creditCardValues.cardValidDate}
                                blurFunction={handleBlur} validation={validateCreditCardDate}
                                error={errors.cardValidDate} disabled={props.alter ? true : false}/>
                        </Col>
                        <Col md={2} className="mb-3">
                            <Input type="password" id="cvv" name="cvv"
                                mask={props.alter ? "" : "999"} label="CVV" obrigatorio
                                changeFunction={handleChange} value={props.alter ? "***" : creditCardValues.cvv}
                                blurFunction={handleBlur} validation={isEmpty}
                                error={errors.cvv} disabled={props.alter ? true : false}/>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input type="text" id="cardBrandTemp" name="cardBrandTemp"
                                label="Bandeira" obrigatorio
                                changeFunction={handleChange} value={creditCardValues.cardBrandTemp}
                                error={errors.cardBrandTemp} disabled />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="mb-3">
                            <Input type="text" id="holderName" name="holderName"
                                label="Nome do titular" obrigatorio
                                changeFunction={handleChange} value={creditCardValues.holderName}
                                blurFunction={handleBlur} validation={validateStringNotEmpty}
                                error={errors.holderName} />
                        </Col>
                        <Col md={4} className="mb-3">
                            <Input type="text" id="holderCpf" name="cpf"
                                label="CPF do titular" obrigatorio
                                mask="999.999.999-99"
                                changeFunction={handleChange} value={creditCardValues.cpf}
                                blurFunction={handleBlur} validation={validateCpflNotEmpty}
                                error={errors.cpf} />
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-end">
                        <Col className="d-flex justify-content-end">
                            {props.alter
                                ? ""
                                : <button class="btn-custom-default btn-cancelar mx-2"  type="reset" >Limpar</button>}

                            <Button class="btn-principal" label="Salvar" type="submit" />
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}

export default RegisterCreditCardForm