import { useState } from "react";
import cardValidator from 'card-validator'
import moment from 'moment'
import { cpf } from 'cpf-cnpj-validator'; 



function useValidation(inputValues) {
    const initialValidState = createInitialValidState(inputValues)

    const [validInput, setValidInput] = useState({ ...initialValidState })
    const [errors, setErrors] = useState({});

    function createInitialValidState(values) {
        let newObj = {}
        for (const input in values) {
            newObj[input] = null
        }
        return newObj
    }

    const resetErrorStates = () => {
        setValidInput({...initialValidState})
        setErrors({})
    }

    const isEmpty = (inputValue, name) => {
    
        if (inputValue === undefined || inputValue === "" || inputValue.trim() === "") {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Campo obrigatório"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })

            return true

        } else {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: ""
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: true
                }
            })

            return false
        }
    }

    const validateStringNotEmpty = (inputValue, name) => {
        const regexName =
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u;

        if (!isEmpty(inputValue, name) && !regexName.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Caracteres inválidos"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateStringNotRequired = (inputValue, name) => {
        const regexName =
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s,.'-]{1,}$/u;

        if (!regexName.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Caracteres inválidos"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateEmailNotRequired = (inputValue, name) => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!regexEmail.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Email inválido"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateEmailNotEmpty = (inputValue, name) => {
        const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (!isEmpty(inputValue, name) && !regexEmail.test(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "Email inválido"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateCpflNotEmpty = (inputValue, name) => {

        if (!isEmpty(inputValue, name) && !cpf.isValid(inputValue)) {
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name]: "CPF inválido"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }

    const validateTelephoneEmpty = (inputValue, name) => {
        if (inputValue !== "" && inputValue.length < 15) {
            setErrors((prevState) => {
                return { ...prevState, [name]: "Celular inválido" }
            })
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        } else {
            validateNotRequired(inputValue, name)
        }
    }

    const validateTelephoneNotEmpty = (inputValue, name) => {
        if(isEmpty(inputValue, name)){
            setErrors((prevState) => {
                return { ...prevState, [name]: "Campo obrigatório" }
            })
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        } else if (inputValue !== "" && inputValue.length < 15) {
            setErrors((prevState) => {
                return { ...prevState, [name]: "Celular inválido" }
            })
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        } 
    }

    const validatePasswordNotEmpty = (inputValue, name) => {
        if (!isEmpty(inputValue, name) && inputValues.password !== inputValues.confirmPassword) {
            setErrors((prevState) => {
                return { ...prevState, confirmPassword: "Senhas digitadas não conferem" }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    confirmPassword: false
                }
            })
        } else {
            setValidInput((prevState) => {
                return {
                    ...prevState,
                    confirmPassword: true
                }
            })
            setErrors((prevState) => {
                return { ...prevState, confirmPassword: "" }
            })
        }
    }

    const validateNotRequired = (inputValue, name) => {
        setErrors((prevState) => {
            return { ...prevState, [name]: "" }
        })

        setValidInput((prevState) => {
            return {
                ...prevState,
                [name]: true
            }
        })
    }

    const validateCreditCardDate = (inputValue, name) => {
        const cardValidation = cardValidator.expirationDate(inputValue)
        if(!isEmpty(inputValue, name)) {
            if (!cardValidation.isValid){
                setErrors((prevState) => {
                    return {
                        ...prevState,
                        [name] : "Data inválida"
                    }
                })
    
                setValidInput((prevState) => {
                    return {
                        ...prevState,
                        [name]: false
                    }
                })
            }
        }
        
    }

    const validateBirthday = (inputValue, name) => {
        let birthDate = moment(inputValue)
        let today = moment()
        let age = today.diff(birthDate) / 1000 / 60 / 60 / 24 / 365

        if(!isEmpty(inputValue, name) && age < 18.015){
            setErrors((prevState) => {
                return {
                    ...prevState,
                    [name] : "Usuário deve ser maior de 18 anos"
                }
            })

            setValidInput((prevState) => {
                return {
                    ...prevState,
                    [name]: false
                }
            })
        }
    }


    const validateForm = (requiredFields) => {
        let formIsValid = true

        for (const key in validInput){
            if (validInput[key] === null){
                if(requiredFields.includes(key)){
                    isEmpty(inputValues[key], key)
                    formIsValid = false
                }
            } else if (validInput[key] === false){
                formIsValid = false
            }
        }
        
       return formIsValid
    };

    const validateAddressForm = (requiredFields) => {
        let formIsValid = true

        for (const key in validInput){
            if (validInput[key] === null){
                if(requiredFields.includes(key)){
                    isEmpty(inputValues[key], key)
                    formIsValid = false
                }
            } else if (validInput[key] === false){
                isEmpty(inputValues[key], key)
                formIsValid = false
            }
        }
        
       return formIsValid
    };


    return {
        validateForm,
        resetErrorStates,
        setErrors,
        errors, validInput,
        isEmpty,
        validateStringNotEmpty,
        validateEmailNotEmpty,
        validateCpflNotEmpty,
        validateTelephoneEmpty,
        validateNotRequired,
        validatePasswordNotEmpty,
        validateCreditCardDate,
        validateStringNotRequired,
        validateEmailNotRequired,
        validateTelephoneNotEmpty,
        validateBirthday,
        validateAddressForm
    }
}

export default useValidation