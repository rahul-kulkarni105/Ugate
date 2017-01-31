// Include React
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
        <div className="jumbotron">
          <h1 className="text-center">Welcome to uGate!</h1>
          <h2 className="text-center">Connecting you across the globe</h2>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputUsername">Username:</label>
              <input type="text" className="form-control" id="inputUsername" value={this.state.username} onChange={this.handleChange} required placeholder="Username"/>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputPassword">Password:</label>
              <input type="password" className="form-control" id="inputPassword" value={this.state.password} onChange={this.handleChange} required placeholder="Password"/>
              <p><a href="#">Forgot password?</a></p>
            </div>

            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
    );
  }
}