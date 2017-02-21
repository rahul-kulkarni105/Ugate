import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import Main from '../components/Main'
import Login from "../components/main_children/Login"
import SignUp from "../components/main_children/SignUp"
import AuthInputPhoneNumber from "../components/main_children/AuthInputPhoneNumber"
import Dashboard from "../components/Dashboard"
import AddPaymentMethod from '../components/dashboard_children/grandchildren/AddPaymentMethod'
import Deposit from '../components/dashboard_children/grandchildren/Deposit'
import History from '../components/dashboard_children/grandchildren/History'
import LogOut from '../components/dashboard_children/grandchildren/LogOut'
import SendToRipple from '../components/dashboard_children/grandchildren/SendToRipple'
import Upload from '../components/dashboard_children/grandchildren/Upload'
import Withdraw from '../components/dashboard_children/grandchildren/Withdraw'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/SignUp" component={SignUp} />


            <IndexRoute component={Login}/>
        </Route>
        <Route path="/Dashboard" component={Dashboard}>

        </Route>
    </Router>
);
