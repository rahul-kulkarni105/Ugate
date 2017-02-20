import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import Main from '../components/Main'
import Login from "../components/main_children/Login"
import SignUp from "../components/main_children/SignUp"
import AuthInputPhoneNumber from "../components/main_children/AuthInputPhoneNumber"
import Dashboard from "../components/Dashboard"
module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="/SignUp" component={SignUp}>
            	<Route path="/AuthInputPhoneNumber" component={AuthInputPhoneNumber}/>
            </Route>
            <Route component={Login}>
            	<Route path="/Dashboard" component={Dashboard}/>
            </Route>
            <IndexRoute component={Login}/>
        </Route>
    </Router>
);
