import React from 'react'
import { render } from 'react-dom'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import Main from '../components/Main'
//import SignUp from '../components/main_children/SignUp'
//import AuthInputPhoneNumber from '../components/main_children/AuthInputPhoneNumber'
module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        	
        </Route>
    </Router>
);
/*<Route path="signup" component={SignUp}>
        		<Route path="authPhone" component={AuthInputPhoneNumber}/>
        	</Route>*/