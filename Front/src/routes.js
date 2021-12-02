import React from "react"
import {BrowserRouter,Switch, Route, Redirect} from "react-router-dom"
import PrivateRoute from "./components/macro/Route/PrivateRoute"
import OrderDetailsRoute from "./components/macro/Route/OrderDetailsRoute"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import OrderDetails from "./pages/OrderDetails/OrderDetails"
import NotFound from "./pages/NotFound/NotFound"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import ChangePassword from "./pages/ChangePassword/ChangePassword"
import CategoryAll from './pages/CategoryAll/CategoryAll'
import CategorySearch from './pages/CategorySearch/CategorySearch'
export const Routes = () => {
    return (
        
        
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category/:id" component={Category}/>
            <PrivateRoute path="/checkout" component={Checkout}/>
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/login" component={Login}/>
            <Route path="/categoryAll" component={CategoryAll}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/register" component={Register}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/categorySearch" component={CategorySearch}/>
            <Route path="/orderDetails" component={OrderDetails}/>
            <OrderDetailsRoute path="/success" component={Success}/>
            <Route path="/about" component={About}/>
            <OrderDetailsRoute path="/orderDetails" component={OrderDetails}/>
            <Route path="/changePassword/:token" component={ChangePassword} />
            <Route component={NotFound}/>
        </Switch>

       
        
    )
}