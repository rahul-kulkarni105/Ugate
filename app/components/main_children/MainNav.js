// Include React
import React from "react";
import helpers from "./../utils/helpers.js";

import {Link} from 'react-router';
const brandStyle = {
    padding: '0px 15px'
}
//MainNav component
export default class MainNav extends React.Component {
    // Here we render the component
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <img alt="uGate Icon" src="./images/ugatelogo.png"/>
                            <Link to="/">
                                uGate &reg;</Link>
                        </div>
                    </div>

                    <ul className="nav navbar-nav navbar-right">
                        <li>


                                <text>New to uGate?</text>

                            <Link to="/SignUp">
                                <button className="btn btn-info">Sign Up</button>
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>
        );
    }
}
