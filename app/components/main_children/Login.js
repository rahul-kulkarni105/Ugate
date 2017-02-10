import React from "react";
import ReactDOM from "react-dom";
import helpers from "./../utils/helpers.js";
import {Grid,Row,Col,Jumbotron,Form,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
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
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }
  setLogin(login){
    this.setState({logindetails: login});
    console.log(this.state.logindetails);
  }
  handleSubmit(event){
    event.preventDefault();
    //console.log(ReactDOM.findDOMNode(this.username).value);
    //this.setLogin({username: ReactDOM.findDOMNode(this.username).value, password: ReactDOM.findDOMNode(this.password).value});
    this.setLogin({username: this.state.username, password: this.state.password});
  }
  handleUserChange(event){
    this.setState({
      username: event.target.value
    });
  }
  handlePassChange(event){
    this.setState({
      password: event.target.value
    });
  }
  // Here we render the component
  //Link navbar-brand href to homepage
  //Link forgot password to page
  render() {
    return (
      <div className="loginContainer">
        <Jumbotron>
          <h1>Welcome to uGate!</h1>
          <h2>Connecting you across the globe</h2>
          <br />
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineUser">
              <ControlLabel>Username</ControlLabel>
              {' '}
              <FormControl type="text" onChange={this.handleUserChange} value={this.state.username} required placeholder="Username" /*ref={username => {this.username = username}}*//>
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlinePassword">
              <ControlLabel>Password</ControlLabel>
              {' '}
              <FormControl type="password" onChange={this.handlePassChange} value={this.state.password} required placeholder="Password" /*ref={password => {this.password = password}}*//>
            </FormGroup>
            {' '}
            <Button type="submit">
              Log in
            </Button>
            {' '}
            <Button bsStyle="link">Forgot Password?</Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}
