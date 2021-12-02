
function useRegisterFormat(){

    const handleGenderCreation = (inputGender) => {
        return { description : inputGender }
    }

    const handleShowGender = (inputValues) => {
        return inputValues.gender.description
    }

    const handleShowAddress = (dbValues) => {
        const newObj = {
            ...dbValues,
            cityTemp : dbValues.city.cityName,
            stateTemp : dbValues.state.uf,
            number : dbValues.number.toString()
        }

        delete newObj.city
        delete newObj.state

        return newObj
    }

    const handleTelephoneCreation = (inputTelephone) => {
        let telArr = inputTelephone.split(") ")
        const ddd = telArr[0].slice(1)

        let numArr = telArr[1].split("-")
        const phoneNumber = numArr[0] + numArr[1]

        return { ddd, phoneNumber }
    }

    const handleShowFormatedTelephone = (dbTelephone) => {
        let tel = `(${dbTelephone.ddd}) ${dbTelephone.phoneNumber.slice(0,5)}-${dbTelephone.phoneNumber.slice(-4)}`
        return {telephoneTemp : tel}
    }

    const handleAddressCreation = (inputAddress) => {
        let newObj = {
            ...inputAddress, 
            city : {cityName : inputAddress.cityTemp},
            state : {uf: inputAddress.stateTemp}
        }

        delete newObj.cityTemp
        delete newObj.stateTemp

        return newObj

    }

    const handleCreditCardCreation = (inputCreditCard) => {
        let newObj = {
            ...inputCreditCard,
            cardBrand : {cardBrandName : inputCreditCard.cardBrandTemp}
        }

        delete newObj.cardBrandTemp
        return newObj
    }

    const handleShowCreditCard = (dbValues) => {
        let newObj = {
            ...dbValues,
            cardBrandTemp : dbValues.cardBrand.cardBrandName
        }

        delete newObj.cardBrand

        return newObj
    }

    return {
        handleAddressCreation,
        handleCreditCardCreation,
        handleGenderCreation,
        handleTelephoneCreation,
        handleShowGender,
        handleShowAddress,
        handleShowCreditCard,
        handleShowFormatedTelephone
    }
}

export default useRegisterFormat