import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main.js}></Route>
    </Router>
);
