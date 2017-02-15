import React from "react";
import helpers from "./../utils/helpers.js";
import {Jumbotron, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
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
    this.setState({
      phonenumber: event.target.value
    });
  }
  render(){
    return (
      <div className="authPhoneNumberContainer">
        <Jumbotron>
          <h1>Authorize Phone Number</h1>
          <h2>Input your phone number</h2>
          <br />
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="formAuthPhone">
              <ControlLabel>Phone Number: </ControlLabel>
              {' '}
              <FormControl type="tel" onChange={this.handleChange} value={this.state.phonenumber} required placeholder="1234567890"/>
            </FormGroup>
            {' '}
            <Button type="submit">
            Submit
            </Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}