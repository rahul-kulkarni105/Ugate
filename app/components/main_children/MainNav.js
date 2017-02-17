// Include React
import React from "react";
import helpers from "./../utils/helpers.js";
import {Navbar,Nav,NavItem} from "react-bootstrap";
import { Link } from 'react-router';
const brandStyle = {
  padding: '0px 15px'
}
//MainNav component
export default class MainNav extends React.Component{
  // Here we render the component
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <img alt="uGate Icon" src="./images/ugatelogo.png"/><Link to="/"> uGate &reg;</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <Navbar.Text>
            New to uGate?
          </Navbar.Text>
          <NavItem eventKey={1} ><Link to ="/SignUp">Sign Up</Link></NavItem>
        </Nav>
      </Navbar>
    );
  }
}
