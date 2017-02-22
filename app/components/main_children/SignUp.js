import React from "react";
import ReactDOM from "react-dom";
import {createUser} from "../utils/helpers.js";
import {Link} from "react-router";
import $ from "jquery";
const styles = {
  signupstyle: {
     background: 'rgb(255,255,255)',
    background: 'rgba(255,255,255,.8)'
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
    $("#signupform").validator();
  }
  componentDidUpdate(prevProps, prevState){

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
          <form id='signupform' className="form-horizontal" onSubmit={this.handleSubmit} role="form" data-toggle="validator">
            <fieldset>
              <legend>Sign Up</legend>
            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formFirstName">
              First Name: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" data-validate="true" id="firstName" data-required-error="Please input your first name" value={this.state.firstName} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formLastName">
              Last Name: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="lastName" data-required-error="Please input your last name" value={this.state.lastName} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formAddress">
              Address: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="address" value={this.state.address} data-required-error="Please input your address" onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formCity">
              City: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="city" value={this.state.city} data-required-error="Please input your city" onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formState">
              State: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="state" value={this.state.state} data-required-error="Please input your state" onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formZip">
              Zip Code: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" data-validate="true" id="zip" pattern="^\d+$" data-pattern-error="Please input a valid zip" data-minlength="5" value={this.state.zip} data-required-error="Please input your zip" onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback">

                <label className="col-lg-2 control-label" htmlFor="formPhonenumber">
                Cell phone(5555555555): </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="phoneNumber" pattern="^\d+$" data-minlength="10" data-maxlength="10" data-required-error="Please input your phone number" data-pattern-error="Please input a valid phone number" value={this.state.phoneNumber} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="rpa">
              RipplePublicAddress: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="ripplePublicAddress" data-required-error="Please input your custom ripple address" value={this.state.ripplePublicAddress} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formUsername">
              Username: </label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="userName" data-minlength="6" data-required-error="Please input your username" value={this.state.userName} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formEmail">
              Email Address: </label>
                <div className="col-lg-10">
                  <input type="email" className="form-control" id="emailAddress" data-required-error="Please input your email" data-error="That email address is invalid" value={this.state.emailAddress} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formConfEmail">
              Confirm Email Address: </label>
                <div className="col-lg-10">
                  <input type="email" className="form-control" data-match="#emailAddress" data-required-error="Please input your email again" data-match-error="These emails don't match" id="confirmEmailAddress" value={this.state.confirmEmailAddress} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formPassword">
              Password: </label>
                <div className="col-lg-10">
                  <input type="password" className="form-control" id="password" data-minlength="6" data-required-error="Please input your password" value={this.state.password} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback" >

                <label className="col-lg-2 control-label" htmlFor="formConfPassword">
              Confirm Password: </label>
                <div className="col-lg-10">
                  <input type="password" className="form-control" id="confirmPassword" data-match="#password" data-required-error="Please input your password again" data-match-error="These passwords don't match" value={this.state.confirmPassword} onChange={this.handleChange} required/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback">

                <label className="col-lg-2 control-label" htmlFor="exampleInputFile">Upload US ID front:</label>
                <div className="col-lg-10">
                  <input type="file" id="idFront" value={this.state.idFront} onChange={this.handleChange}/>
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-group has-feedback">

                <label className="col-lg-2 control-label" htmlFor="exampleInputFile">Upload US ID back:</label>
                <div className="col-lg-10">
                  <input type="file" id="idBack" value={this.state.idBack} onChange={this.handleChange} />
                  <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

            <div className="form-check">

            <div className="col-lg-2">
            </div>
              <div className="col-lg-10">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"/> <a data-toggle="modal" data-target="#termsModal"> Terms of Service </a>
              </label>
              <div className="help-block with-errors"></div>
              <br />

              <button className="btn btn-default" type="submit">Submit</button>

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
