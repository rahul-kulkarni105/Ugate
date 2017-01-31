// Include React
import React from "react"
// import helpers from "./utils/helpers.js"

//Main component
export default class Main extends React.Component{
  // Here we render the component
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="uGate Icon" src="./..../public/images/ugatelogo.png"/>
                uGate &reg;
              </a>
              <p className="navbar-text navbar-right">New to uGate?</p>
              <button type="button" className="btn btn-default navbar-btn navbar-right">Sign In</button>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
