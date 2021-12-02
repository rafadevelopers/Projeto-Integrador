import React from 'react'
import { useLocation } from 'react-router-dom'
import PayMentForm from '../../components/micro/TotalValueSuccess/PayMentForm'
import OrderCode from '../../components/OrderCode/OrderCode'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
import './Success.css'





function Success(props) {
    const location = useLocation()
    const order = location.state


    return (
        <>  
            <OrderCode order={order}/>
            <div class="mt-1 container">
                <div>
                    <OrderDetails order={order}/>
                </div>
               <PayMentForm order={order}/>
            </div>    
        </>
    )
}

export default Success