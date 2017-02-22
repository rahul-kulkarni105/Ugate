import React from "react";
import ReactDOM from "react-dom";
import {createUser} from "../utils/helpers.js";
import {Link} from "react-router";
const styles = {
  signupstyle: {
     background: 'rgb(255,255,255)',
    background: 'rgba(255,255,255,.8)',
    paddingBottom: 50
  }

}
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
      ripplePublicAddress: '',
      emailAddress: '',
      userName: '',
      confirmEmailAddress: '',
      password: '',
      confirmPassword: '',
      signupdetails: '',
      //Ryan I moved on to the other components see if you can figure out how to store Images in MongoDB. I am tired of reading about it and honesly have been stuck tring to figure it out something about multer idk weird
      idFront: '',
      idBack: ''

    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    $(document).ready(function(){
      if(jQuery){
        console.log("loaded");
      }else{
        console.log("notloaded");
      }
      $("#signupForm").bootstrapValidator();
    });
  }
  handleSubmit(event){
    //alerts user that they have been sent an email to veriffy account
    //alert("Welcome to UGate. We sent you an email to verify your account.")
    //prevents page refresh
    event.preventDefault();
    //call create user function from helpers and send object of user information
     createUser({firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, phoneNumber: this.state.phoneNumber, ripplePublicAddress: this.state.ripplePublicAddress,userName: this.state.userName, email: this.state.emailAddress, password: this.state.password, });
      event.preventDefault();



  }
  handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  render() {
    return (
  

<div style={styles.signupstyle}>
          <form id="signupForm" data-bv-message="This value is not valid" 
          data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
          data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
          data-bv-feedbackicons-validating="glyphicon glyphicon-refresh"
          /*data-bv-submitbuttons='button[type="submit"]'*/
          data-bv-live="enabled" 
          className="form-horizontal" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Sign Up</legend>
            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formFirstName">
              First Name: </label>
                <div className="col-lg-10">
                  <input type="text" id="firstName" name="first"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your first name" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^[A-Za-z\s.'-]+$" 
                  data-bv-regexp-message="Alphabetical characters, hyphens and spaces" 
                  className="form-control" value={this.state.firstName} onChange={this.handleChange}/>
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formLastName">
              Last Name: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="lastName" name="last"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your last name" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^[A-Za-z\s.'-]+$" 
                  data-bv-regexp-message="Alphabetical characters, hyphens and spaces" 
                  value={this.state.lastName} onChange={this.handleChange}/>
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formAddress">
              Address: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="address" name="address"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your address" 
                  value={this.state.address} onChange={this.handleChange}/>
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formCity">
              City: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="city" name="city"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your city" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^[A-Za-z\s.'-]+$" 
                  data-bv-regexp-message="Alphabetical characters, hyphens and spaces" 
                  value={this.state.city} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formState">
              State: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="state" name="state"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your state" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^[A-Za-z\s.'-]+$" 
                  data-bv-regexp-message="Alphabetical characters, hyphens and spaces" 
                  value={this.state.state} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formZip">
              Zip Code: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" name="zip"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your zip code" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^\d{5}(?:[-\s]\d{4})?$"
                  data-bv-regexp-message="Please fill in a valid zip code"
                  id="zip" value={this.state.zip} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group">

                <label className="col-lg-2 control-label" htmlFor="formPhonenumber">
                Cell phone(5555555555): </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" name="phone"
                  data-bv-notempty="true"
                  data-bv-notempty-message="Please fill in your phone number"
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                  data-bv-regexp-message="Please fill in a valid phone number"
                   id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="rpa">
              RipplePublicAddress: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" name="rippleadd"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your ripple public address" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^\w+$" 
                  data-bv-regexp-message="Alphabetical characters and underscore only"
                  id="ripplePublicAddress" value={this.state.ripplePublicAddress} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formUsername">
              Username: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="userName" name="userName"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your username" 
                  data-bv-regexp="true"
                  data-bv-regexp-regexp="^\w+$" 
                  data-bv-regexp-message="Alphabetical characters and underscore only"
                  value={this.state.userName} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formEmail">
              Email Address: </label>
                <div className="col-lg-10">
                  <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} 
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your email address" 
                  data-bv-emailaddress-message="Please input a valid email address"
                  data-bv-identical="true"
                  data-bv-identical-field="confirmemailadd"
                  data-bv-identical-message="The email fields are not the same"
                  name="emailadd"/>
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formConfEmail">
              Confirm Email Address: </label>
                <div className="col-lg-10">
                  <input type="email" className="form-control" name="confirmemailadd"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please repeat your email address" 
                  data-bv-identical="true"
                  data-bv-identical-field="emailadd"
                  data-bv-identical-message="The email fields are not the same"
                  id="confirmEmailAddress" value={this.state.confirmEmailAddress} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formPassword">
              Password: </label>
                <div className="col-lg-10">
                  <input type="password" className="form-control" id="password" name="pass"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please fill in your password" 
                  data-bv-identical="true"
                  data-bv-identical-field="confirmpass"
                  data-bv-identical-message="The password fields are not the same"
                  value={this.state.password} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group" >

                <label className="col-lg-2 control-label" htmlFor="formConfPassword">
              Confirm Password: </label>
                <div className="col-lg-10">
                  <input type="password" className="form-control" id="confirmPassword" name="confirmpass"
                  data-bv-notempty="true" 
                  data-bv-notempty-message="Please repeat your email address" 
                  data-bv-identical="true"
                  data-bv-identical-field="pass"
                  data-bv-identical-message="The password fields are not the same"
                  value={this.state.confirmPassword} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group">

                <label className="col-lg-2 control-label" htmlFor="exampleInputFile">Upload US ID front:</label>
                <div className="col-lg-10">
                  <input type="file" id="idFront" value={this.state.idFront} onChange={this.handleChange}/>
                  
                </div>
              </div>

            <div className="form-group">

                <label className="col-lg-2 control-label" htmlFor="exampleInputFile">Upload US ID back:</label>
                <div className="col-lg-10">
                  <input type="file" id="idBack" value={this.state.idBack} onChange={this.handleChange} />
                  
                </div>
              </div>

            <div className="form-check">

            <div className="col-lg-2">
            </div>
              <div className="col-lg-10">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"/> <a data-toggle="modal" data-target="#termsModal"> Terms of Service </a>
              </label>
              <br />

              <button className="btn btn-default" disabled="disabled" type="submit">Submit</button>

              </div>
              </div>





          </fieldset>

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
                  <button data-disable="true" type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                </div>
              </div>
            </div>
          </div>
           {this.props.children}
        </div>



    );
  }
}
