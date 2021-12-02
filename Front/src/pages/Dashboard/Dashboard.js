import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import axios from 'axios';
import useLogin from "../../hooks/useLogin"
import DashboardMenuMobile from '../../components/macro/Dashboard/Menu/DashboardMenuMobile'
import DashboardMenuDesktop from '../../components/macro/Dashboard/Menu/DashboardMenuDesktop'
import UserForm from '../../components/macro/Dashboard/UserForm/UserForm'
import OrderList from '../../components/macro/Dashboard/OrderList/OrderList'
import ComponentCard from '../../components/macro/Dashboard/ComponentCard/ComponentCard'
import AddressList from '../../components/macro/Dashboard/InfoList/AddressList';
import CreditCardList from '../../components/macro/Dashboard/InfoList/CreditCardList';
import TelephoneList from '../../components/macro/Dashboard/InfoList/TelephoneList';

function Dashboard(props) {
    const {userId, token, logout} = useLogin()
    const getUrl = `http://localhost:8080/customers/${userId}`
    
    const [user, setUser] = useState({})
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { url } = useRouteMatch()
    
    const refreshPage = () => {
        window.location.reload();
    }


    const getUser = () => axios.get(getUrl, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => {
        setUser({...response.data})
        setIsLoading(false)
    })
    .catch(error => {
        logout()
        refreshPage()
    })

    const getCustomerOrders = async () => {
        await axios.get(`http://localhost:8080/request/customer/${userId}`, {
             headers : {
                 Authorization : `Bearer ${token}`
             }
         }).then((response) => {
             if(response.status === 200){
                 setOrders([...response.data])
             }
         }).catch(error => console.log(error))
     }

    const renderUser = async () => { 
        await getUser()
        await getCustomerOrders()
    }

    useEffect(() => {
        renderUser()
    }, [])

   

    return (
        <>
            <Container className="mb-5">
                <Row>
                    <Col>
                        <DashboardMenuMobile username={user.name} />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <DashboardMenuDesktop username={user.name}/>
                        <ComponentCard>
                            <Switch>
                                <Route path={`${url}/userForm`}>
                                    <UserForm userData={user} isLoading={isLoading}/>
                                </Route>
                                <Route path={`${url}/myOrders`}>
                                    <OrderList orders={orders} />
                                </Route>
                                <Route path={`${url}/myCards`}>
                                    <CreditCardList type="cartão" title="Meus Cartões" userData={user} isLoading={isLoading}/>
                                </Route>
                                <Route path={`${url}/myAddresses`}>
                                    <AddressList type="endereço" title="Meus Endereços" userData={user} isLoading={isLoading} />
                                </Route>
                                <Route path={`${url}/myTelephones`}>
                                    <TelephoneList type="telefone" title="Meus Telefones" userData={user} isLoading={isLoading}/>
                                </Route>
                            </Switch>
                        </ComponentCard>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard