import React from "react";
import ReactDOM from "react-dom";
import helpers from "./../utils/helpers.js";
export default class SignUp extends React.Component{
  //Constructor function to set initial states
  constructor(props){
    super(props),
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: 0,
      userName: "",
      emailAddress: "",
      confirmEmailAddress: "",
      password: "",
      confirmPassword: "",
      signupdetails: "",
      showModal: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.setSignup = this.setSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfEmailChange = this.handleConfEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
  }
  closeModal(){
    this.setState({showModal: false});
  }
  openModal(){
    this.setState({showModal: true});
  }
  setSignup(signup){
    this.setState({signupdetails: signup});
    console.log(this.state.signupdetails);
  }
  handleSubmit(event){
    event.preventDefault();
    this.setSignup({firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, userName: this.state.userName, email: this.state.emailAddress, confirmEmailAddress: this.state.confirmEmailAddress, password: this.state.password, confirmPassword: this.state.confirmPassword});
  }
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
  }
  render() {
    return (

        <div className="panel panel-default padd">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group" >
              <label htmlFor="formFirstName">
            First Name: </label>
              <input type="text" onChange={this.handleFirstChange} value={this.state.firstName} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formLastName">
            Last Name: </label>
              <input type="text" onChange={this.handleLastChange} value={this.state.lastName} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formAddress">
            Address: </label>
              <input type="text" onChange={this.handleAddressChange} value={this.state.address} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formCity">
            City: </label>
              <input type="text" onChange={this.handleCityChange} value={this.state.city} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formState">
            State: </label>
              <input type="text" onChange={this.handleStateChange} value={this.state.state} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formZip">
            Zip Code: </label>
              <input type="number" onChange={this.handleZipChange} value={this.state.zip} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formUsername">
            Username: </label>
              <input type="text" onChange={this.handleUsernameChange} value={this.state.userName} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formEmail">
            Email Address: </label>
              <input type="email" onChange={this.handleEmailChange} value={this.state.emailAddress} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formConfEmail">
            Confirm Email Address: </label>
              <input type="email" onChange={this.handleConfEmailChange} value={this.state.confirmEmailAddress} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formPassword">
            Password: </label>
              <input type="password" onChange={this.handlePasswordChange} value={this.state.password} required/>

            </div>
            <div className="form-group" >
              <label htmlFor="formConfPassword">
            Confirm Password: </label>
              <input type="password" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPassword} required/>

            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> <a data-toggle="modal" data-target="#termsModal"> Terms of Service </a>
              </label>
            </div>




                <button className="btn btn-default" type="submit" onSubmit={this.handleSubmit}>Submit</button>

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
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

      </div>

    );
  }
}
