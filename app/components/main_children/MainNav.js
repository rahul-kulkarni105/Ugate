// Include React
import React from "react";
import helpers from "./../utils/helpers.js";

const brandStyle = {
  padding: '0px 15px'
}
//MainNav component
export default class MainNav extends React.Component{
  // Here we render the component
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <p className="nav navbar-nav navbar-text navbar-brand" style={brandStyle}><a href="#">
              <img alt="uGate Icon" src="./images/ugatelogo.png"/>
              uGate &reg;
            </a></p>
          <div className="nav navbar-nav navbar-right">
            <p className="navbar-text">New to uGate?  
            <button type="button" className="btn btn-default">Sign In</button></p>
          </div>
        </div>
      </nav>
    );
  }
}
