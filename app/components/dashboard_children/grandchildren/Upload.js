import React from 'react'

export default class Upload extends React.Component{
  render(){
    return(
      <form method="post" enctype="multipart/form-data" action="/upload">
          <input type="file" name="file" />
          <input type="submit" value="Submit" />
      </form>
    );
  }
}
