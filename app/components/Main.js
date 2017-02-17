// Include React
import React from "react";
// import helpers from "./utils/helpers.js"

import MainNav from "./main_children/MainNav";

import {Link} from 'react-router'
//Main component
export default class Main extends React.Component {
    // Here we render the component
    render() {
        return (
            <div>
                <div className="row">
                    <MainNav/>
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
    }
}
