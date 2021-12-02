import { Route, Redirect } from "react-router-dom";


const OrderDetailsRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest}
            render={props => {
                return props.location.state !== undefined
                    ? <Component {...props} />
                    : <Redirect to={{pathname : "dashboard/myOrders", state : {from : props.location}}} />
            }
            } />
    )
}

export default OrderDetailsRoute