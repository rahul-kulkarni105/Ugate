// Include React
import React from "react";
// import helpers from "./utils/helpers.js"
import Login from "./main_children/Login";
import MainNav from "./main_children/MainNav";
import {Grid,Row,Col} from "react-bootstrap";
import SignUp from './main_children/SignUp';
//Main component
export default class Main extends React.Component{
  // Here we render the component
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={12}>
              <MainNav />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {this.props.children}
              <Login />
            </Col>
            
          </Row>
          <SignUp />
        </Grid>
      </div>
    );
  }
}
