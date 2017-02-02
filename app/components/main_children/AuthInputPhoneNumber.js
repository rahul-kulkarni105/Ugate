import React from "react";
import helpers from "./../utils/helpers.js";

//AuthInputPhoneNumber component
export default class AuthInputPhoneNumber extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      phonenumber: "",
      logindetails: "",
    };
  }
  setLogin(login){
    this.setState({logindetails: login});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setLogin({phonenumber: this.state.phonenumber});
  }
  handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  render(){
    return (
      <div className="jumbotron">
        <h1 className="text-center">Welcome to uGate!</h1>
        <h2 className="text-center">Connecting you across the globe</h2>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="sr-only" htmlFor="inputPhone">Input Phone Number:</label>
            <input type="tel" className="form-control" id="inputPhone" value={this.state.phonenumber} onChange={this.handleChange} required placeholder="xxx xxx xxxx"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}