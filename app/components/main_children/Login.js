import React from "react";
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
    this.handleChange = this.handleChange.bind(this);
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
      <div className="loginContainer">
        <Jumbotron>
          <h1>Welcome to uGate!</h1>
          <h2>Connecting you across the globe</h2>
          <br />
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formInlineUser">
              <ControlLabel>Username</ControlLabel>
              {' '}
              <FormControl type="text" onChange={this.handleChange} required placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlinePassword">
              <ControlLabel>Password</ControlLabel>
              {' '}
              <FormControl type="password" onChange={this.handleChange} required placeholder="Password" />
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
