import React from "react";
import ReactDOM from "react-dom";
import helpers from "./../utils/helpers.js";
import { Button,Modal,Grid,Row,Col,Panel,Form,FormGroup,ControlLabel,FormControl,Checkbox} from 'react-bootstrap';
//Signup component
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
      email: event.target.value
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
      <div className="signupContainer">
        <Panel header="Sign Up" bsStyle="info">
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formFirstName">
              <Col componentClass={ControlLabel} sm={2}>First Name: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleFirstChange} value={this.state.firstName} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formLastName">
              <Col componentClass={ControlLabel} sm={2}>Last Name: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleLastChange} value={this.state.lastName} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formAddress">
              <Col componentClass={ControlLabel} sm={2}>Address: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleAddressChange} value={this.state.address} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formCity">
              <Col componentClass={ControlLabel} sm={2}>City: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleCityChange} value={this.state.city} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formState">
              <Col componentClass={ControlLabel} sm={2}>State: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleStateChange} value={this.state.state} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formZip">
              <Col componentClass={ControlLabel} sm={2}>Zip Code: </Col>
              <Col sm={10}>
                <FormControl type="number" onChange={this.handleZipChange} value={this.state.zip} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formUsername">
              <Col componentClass={ControlLabel} sm={2}>Username: </Col>
              <Col sm={10}>
                <FormControl type="text" onChange={this.handleUserChange} value={this.state.username} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formEmail">
              <Col componentClass={ControlLabel} sm={2}>Email Address: </Col>
              <Col sm={10}>
                <FormControl type="email" onChange={this.handleEmailChange} value={this.state.email} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formConfEmail">
              <Col componentClass={ControlLabel} sm={2}>Confirm Email Address: </Col>
              <Col sm={10}>
                <FormControl type="email" onChange={this.handleConfEmailChange} value={this.state.confirmEmailAddress} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formPassword">
              <Col componentClass={ControlLabel} sm={2}>Password: </Col>
              <Col sm={10}>
                <FormControl type="password" onChange={this.handlePasswordChange} value={this.state.password} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formConfPassword">
              <Col componentClass={ControlLabel} sm={2}>Confirm Password: </Col>
              <Col sm={10}>
                <FormControl type="password" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPassword} required/>
              </Col>
            </FormGroup>
            <FormGroup controlId="checkTerms">
              <Col smOffset={2} sm={10}>
                <Checkbox required>
                <Button bsStyle="link" onClick={this.openModal}>Terms of Service</Button>
                </Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" bsStyle="primary" onSubmit={this.handleSubmit}>Submit</Button> 
              </Col>
            </FormGroup>
          </Form>
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
        </Panel>
      </div>
    );
  }
}
