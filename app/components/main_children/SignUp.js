import React from "react";
import ReactDOM from "react-dom";
import {createUser} from "../utils/helpers.js";
import {Link} from "react-router";
console.log(createUser)
export default class SignUp extends React.Component{
  //Constructor function to set initial states
  constructor(props){
    super(props),
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phoneNumber: '',
      userName: '',
      emailAddress: '',
      confirmEmailAddress: '',
      password: '',
      confirmPassword: '',
      signupdetails: ''

    }

    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    /*this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfEmailChange = this.handleConfEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);*/
  }
  componentDidUpdate(prevProps, prevState){
    console.log("fuck off")
  }
  handleSubmit(event){
    alert("Welcome to UGate. We sent you an email to verify your account.")
    event.preventDefault();
     createUser({firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, phoneNumber: this.state.phoneNumber, userName: this.state.userName, email: this.state.emailAddress, password: this.state.password});


     event.preventDefault();


  }
  handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }/*
  handleFirstChange(event){
    this.setState({
      firstName: event.target.value
    });
  }
  handleLastChange(event){
    this.setState({
      lastName: event.target.value
    });
  }
  handleAddressChange(event){
    this.setState({
      address: event.target.value
    });
  }
  handleCityChange(event){
    this.setState({
      city: event.target.value
    });
  }
  handleStateChange(event){
    this.setState({
      state: event.target.value
    });
  }
  handleZipChange(event){
    this.setState({
      zip: event.target.value
    });
  }
  handleUsernameChange(event){
    this.setState({
      userName: event.target.value
    });
  }
  handleEmailChange(event){
    this.setState({
      emailAddress: event.target.value
    });
  }
  handleConfEmailChange(event){
    this.setState({
      confirmEmailAddress: event.target.value
    });
  }
  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }
  handleConfirmPasswordChange(event){
    this.setState({
      confirmPassword: event.target.value
    });
  }*/
  render() {
    return (

        <div className="panel panel-default padd">
        <div className="panel-heading"> Sign Up</div>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formFirstName">
              First Name: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formLastName">
              Last Name: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formAddress">
              Address: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="address" value={this.state.address} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formCity">
              City: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formState">
              State: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formZip">
              Zip Code: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="zip" value={this.state.zip} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <label className="col-md-2" htmlFor="formPhonenumber">Cell phone(555-555-5555):</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formUsername">
              Username: </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formEmail">
              Email Address: </label>
                <div className="col-md-9">
                  <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formConfEmail">
              Confirm Email Address: </label>
                <div className="col-md-9">
                  <input type="email" className="form-control" id="confirmEmailAddress" value={this.state.confirmEmailAddress} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formPassword">
              Password: </label>
                <div className="col-md-9">
                  <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-group" >
              <div className="row">
                <label className="col-md-2 control-label" htmlFor="formConfPassword">
              Confirm Password: </label>
                <div className="col-md-9">
                  <input type="password" className="form-control" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required/>
                </div>
              </div>
            </div>
            <div className="form-check">
            <div className="row">
            <div className="col-md-2">
            </div>
              <div className="col-md-9">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"/> <a data-toggle="modal" data-target="#termsModal"> Terms of Service </a>
              </label>
              <br />
              <button className="btn btn-default" type="submit" /*onSubmit={this.handleSubmit}*/>Submit</button>
              </div>
              </div>
            </div>






          </form>

          <div className="modal fade" id="termsModal" tabIndex="-1" role="dialog" aria-labelledby="termsModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title" id="termsModalLabel">Terms of Service</h4>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>

      </div>

    );
  }
}
