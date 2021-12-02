import React from "react"
import InfoItem from "./InfoItem/InfoItem"

import './InfoList.css'

function InfoList(props) {
    const renderList = (array) => {
        let items = []
        for(let i = 0; i < array.length; i++){
            items.push(<InfoItem obj={array[i]} key={i} type={props.type}/>)
        }
        return items
    }

    if (props.isLoading) {
        return <p>Loading...</p>
    }

    const chooseType = (type) => {
        switch(type){
            case 'cartão':
                return renderList(props.userData.creditCards)
            case 'endereço':
                return renderList(props.userData.addresses)
            case 'telefone' :
                return renderList(props.userData.telephones)
            default:
                return ""
        }
    }

    return (
        <>
            {chooseType(props.type)}
        </>
    )
}

export default InfoList