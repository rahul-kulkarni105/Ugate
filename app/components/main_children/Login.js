import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router';
import {login, checkLogIn, loadData} from './../utils/helpers';

//Login component
const styles = {
  jumboStyle : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: "10%",
    paddingBottom: '15%',
    //background: 'rgb(179, 236, 255)',
    //background: 'rgba(179, 236, 255, 0'
    background: 'rgb(255,255,255)',
    background: 'rgba(255,255,255,.8)'
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
  componentWillMount(){
    checkLogIn().then(function(logged){
      if(logged === true){
        this.props.router.push('/Dashboard')
      }
    }.bind(this));
  }
  handleSubmit(event){
    login({email: this.state.email, password: this.state.password}).then(function(response){
      checkLogIn().then(function(logged){
        if(logged === true){
          loadData().then(function(data){

                  this.props.router.push({pathname: '/Dashboard', state:{history: data} })

          }.bind(this));
        }
      }.bind(this));
    }.bind(this));

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
            <Link to="/Dashboard">
          <button className="btn btn-default" type="submit">
              Log in
            </button>
          </Link>

            {' '}
            <a>Forgot Password?</a>
          </div>
          </form>

      </div>
    );
  }
}
