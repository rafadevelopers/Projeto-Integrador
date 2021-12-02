import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
  import useLogin from '../../../../hooks/useLogin';

function MenuItems(props) {
    let {url} = useRouteMatch()
    const {logout} = useLogin()

    return (
        <ul className="menu-items">
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/userForm`}>Meus Dados</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myOrders`}>Meus Pedidos</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myCards`}>Meus Cartões</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myAddresses`}>Meus Endereços</Link></li>
            <li className="menu-item" onClick={() => props.toggleMobileMenu && props.toggleMobileMenu()}><Link to={`${url}/myTelephones`}>Meus Telefones</Link></li>
            <li className="menu-item" onClick={() => logout() && props.toggleMobileMenu && props.toggleMobileMenu()}><a href="">Sair</a></li>
        </ul>
    )
}

export default MenuItems