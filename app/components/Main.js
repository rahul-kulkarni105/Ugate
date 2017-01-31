// Include React
import React from "react";
// import helpers from "./utils/helpers.js"
import Login from "./main_children/Login";

//Main component
export default class Main extends React.Component{
  // Here we render the component
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <a className="nav navbar-nav navbar-brand navbar-left" href="#">
              <img alt="uGate Icon" src="./images/ugatelogo.png"/>
              uGate &reg;
            </a>
            <p className="nav navbar-nav navbar-text navbar-right">New to uGate?  
            <button type="button" className="btn btn-default navbar-btn">Sign In</button></p>
          </div>
        </nav>
        <div className="container">
          <Login />
          {this.props.children}
        </div>
      </div>
    );
  }
}
