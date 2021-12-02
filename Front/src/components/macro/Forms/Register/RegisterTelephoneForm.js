import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";
import Button from "../../../micro/Button/Button";
import Input from "../../../micro/Forms/Input/Input";
import useValidation from '../../../../hooks/useValidation'


const initialInputValue = {
    telephoneTemp : ""
};

function RegisterTelephoneForm(props) {
    const [inputValues, setInputValues] = useState(props.alter ? props.alter : { ...initialInputValue });
    const requiredFields = ["telephoneTemp"]
    const {
        validateForm,
        resetErrorStates,
        errors,
        validateTelephoneNotEmpty
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
        setInputValues({ ...initialInputValue });
        resetErrorStates();
    };

    return (
        <>
            <form onSubmit={handleSubmit} onReset={resetForm} autoComplete="off">
                <Col md={10} lg={8} className="mx-auto">
                    <Row>
                        <Col>
                            <Input type="tel" id="telephone" placeholder="(XX) XXXXX-XXXX" label="Celular" 
                                mask="(99) 99999-9999" name="telephoneTemp"
                                value={inputValues.telephoneTemp}
                                changeFunction={handleChange}
                                blurFunction={handleBlur}
                                validation={validateTelephoneNotEmpty}
                                error={errors.telephoneTemp}/>
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

export default RegisterTelephoneForm;
