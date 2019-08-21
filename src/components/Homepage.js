import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

class Homepage extends React.Component{


  onClick = () => {
      this.props.handleClick(this.props.history.push)
    }


  render(){
    if(!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
    return(
      <div>
       <h1>Homepage</h1>
       <Button onClick={this.onClick}>Log Out</Button>
      </div>
    )
  }
}

export default Homepage
