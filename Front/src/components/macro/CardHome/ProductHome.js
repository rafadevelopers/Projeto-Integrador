import React from 'react'
import '../../micro/Button/Button.css'
import { useEffect, useState } from 'react'


import useCart from '../../../hooks/useCart'
import CardHome from './CardHome'

function ProductHome(props) {
    const id = props.produto.id

    const { getInventory } = useCart()
    const [emEstoque, setEmEstoque] = useState(false)
    const [ultimasUnidades, setUltimasUnidades] = useState(false)

    const verificarEstoque = async () => {
        let estoque = await getInventory(id)
        setEmEstoque(estoque > 0)
        if(estoque < 5){
            setUltimasUnidades(true)
        }
    }

    useEffect(() => {
        verificarEstoque()
    }, [])

    return (
        <>
            <CardHome produto={{ ...props.produto }} emEstoque={emEstoque} ultimasUnidades={ultimasUnidades}/>
        </>
    )
}

export default ProductHome