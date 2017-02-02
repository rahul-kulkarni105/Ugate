// Include React
import React from "react";
// import helpers from "./utils/helpers.js"
import Login from "./main_children/Login";
import MainNav from "./main_children/MainNav";
import SignUp from "./main_children/SignUp";
const loginForm={
  textAlign: 'center'
}
//Main component
export default class Main extends React.Component{
  // Here we render the component
  render() {
    return (
      <div>
        <SignUp />
        <MainNav />
        <div className="row" style={loginForm}>
        {this.props.children}
          <Login />
          
        </div>
      </div>
    );
  }
}
