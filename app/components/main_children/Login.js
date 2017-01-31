// Include React
import React from "react";
var React = require("react");
var helpers = require("./utils/helpers.js");
//Login component
var Login = React.createClass({
  getInitialState: function(){
    return {
      username: "",
      password: "",
      logindetails: ""
    };
  },
  setLogin: function(login){
    this.setState({logindetails: login});
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.setLogin({username: this.state.username, password: this.state.password});
  },
  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  // Here we render the component
  //Link navbar-brand href to homepage
  //Link forgot password to page
  render: function() {
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
});

// Export the component back for use in other files
module.exports = Login;
