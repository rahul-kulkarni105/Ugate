import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import {login} from './../utils/helpers'

//Login component
const styles = {
  jumboStyle : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: "10%",
    background: 'rgb(179, 236, 255)',
    background: 'rgba(179, 236, 255, .8'
  }
}
export default class Login extends React.Component{
  constructor(props){
    super(props),
    this.state = {
      email: "",
      password: "",

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
  }
  handleSubmit(event){
    login({email: this.state.email, password: this.state.password});
    event.preventDefault();
    //console.log(ReactDOM.findDOMNode(this.username).value);
    //this.setLogin({username: ReactDOM.findDOMNode(this.username).value, password: ReactDOM.findDOMNode(this.password).value});

  }
  handleUserChange(event){
    this.setState({
      email: event.target.value
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
      <div className="jumbotron" style={styles.jumboStyle} >
          <h1>Welcome to uGate!</h1>
          <h2>Connecting you across the globe</h2>
          <br />
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              {' '}
              <input type="text"  onChange={this.handleUserChange} value={this.state.email} required placeholder="Email" />

            {' '}
            <div className="form-group">
              <label htmlFor="password">Password </label>
              {' '}
              <input type="password" onChange={this.handlePassChange} value={this.state.password} required placeholder="Password" />
            </div>
            {' '}

            <button className="btn btn-default" type="submit">
              Log in
            </button>
            
            {' '}
            <a>Forgot Password?</a>
          </div>
          </form>

      </div>
    );
  }
}
