import React from 'react'

export default class LogOut extends React.Component {
  componentWillMount(){
    document.cookie = 'auth_log' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.props.router.push('/')
  }
  render(){
    return(
    <div></div>
  );
  }
}
