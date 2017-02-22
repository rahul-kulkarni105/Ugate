import React from 'react'

const style={
height: "100vh",
width: "100%"
}

export default class RippleCharts extends React.Component{


render(){
  return(
    <iframe style={style} src="https://charts.ripple.com/#/" />
  );
}

}
