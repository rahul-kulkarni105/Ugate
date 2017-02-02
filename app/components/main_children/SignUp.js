import React from "react";
import helpers from "./../utils/helpers.js";
import { Button,Modal} from 'react-bootstrap';
//Signup component
export default class SignUp extends React.Component{
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
    this.handleChange = this.handleChange.bind(this);
  }
  closeModal(){
    this.setState({showModal: false});
  }
  openModal(){
    this.setState({showModal: true});
  }
  setSignup(signup){
    this.setState({signupdetails: signup});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setSignup({firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, userName: this.state.userName, email: this.state.emailAddress, confirmEmailAddress: this.state.confirmEmailAddress, password: this.state.password, confirmPassword: this.state.confirmPassword});
  }
  handleChange(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">Sign up</div>
        <form>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Address: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="address" value={this.state.address} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="city" className="col-sm-2 col-form-label">City: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="zip" className="col-sm-2 col-form-label">Zip Code: </label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="zip" value={this.state.zip} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="userName" className="col-sm-2 col-form-label">Username: </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="emailAddress" className="col-sm-2 col-form-label">Email: </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="confirmEmailAddress" className="col-sm-2 col-form-label">Confirm Email: </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="confirmEmailAddress" value={this.state.confirmEmailAddress} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password: </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password: </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
            </div>
          </div>
          <div className="form-check row">
            <label htmlFor="checkTerms" className="form-check-label">
              <input type="checkbox" className="form-check-input" required/>
              <Button bsStyle="link" onClick={this.openModal}>Terms of Service</Button>
            </label>
          </div>
          <div className="row">
            <Button type="submit" bsStyle="primary" onSubmit={this.handleSubmit}>Submit</Button>
          </div>
        </form>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Terms of Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>This be some great terms of service. All revenue made goes to the Rhino Foundation. A+ Business. 10/10. Would share with a friend. </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
    );
  }
}
