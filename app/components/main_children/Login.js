import React from "react";
import ReactDOM from "react-dom";
import helpers from "./../utils/helpers.js";

//Login component
const styles = {
  jumboStyle : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: "10%"
  }
}
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
      <div className="jumbotron" style={styles.jumboStyle} >
          <h1>Welcome to uGate!</h1>
          <h2>Connecting you across the globe</h2>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="username">email or username</label>
              {' '}
              <input type="email"  onChange={this.handleUserChange} value={this.state.username} required placeholder="Username" />

            {' '}
            <div className="form-group">
              <label for="password">Password </label>
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
