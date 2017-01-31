import React from 'react'
import { render } from 'react-dom'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import Main from '../components/Main'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
        	
        </Route>
    </Router>
);
