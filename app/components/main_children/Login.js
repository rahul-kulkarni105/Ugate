import React from "react";
import helpers from "./../utils/helpers.js";

//Login component
export default class Login extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      username: "",
      password: "",
      logindetails: ""
    }
    this.setLogin = this.setLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  setLogin(login){
    this.setState({logindetails: login});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setLogin({username: this.state.username, password: this.state.password});
  }
  handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  // Here we render the component
  //Link navbar-brand href to homepage
  //Link forgot password to page
  render() {
    return (
      <div className="loginContainer">
        <h1 className="text-center">Welcome to uGate!</h1>
        <h2 className="text-center">Connecting you across the globe</h2>
        <br />
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleChange} required placeholder="Username"/>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} required placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
          <a href="#">Forgot password?</a>
        </form>
      </div>
    );
  }
}
