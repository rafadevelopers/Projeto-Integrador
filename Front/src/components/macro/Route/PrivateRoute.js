import { Route, Redirect } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useLogin();

    return (
        <Route {...rest}
            render={props => {
                return isAuthenticated()
                    ? <Component {...props} />
                    : <Redirect to={{pathname : "/login", state : {from : props.location}}} />
            }
            } />
    )
}

export default PrivateRoute