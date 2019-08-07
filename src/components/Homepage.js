import React from 'react'
import { Button } from 'semantic-ui-react'

class Homepage extends React.Component{


  onClick = () => {
      this.props.handleClick(this.props.history.push)
    }


  render(){
    return(
      <div>
       <h1>Homepage</h1>
       <Button onClick={this.onClick}>Log Out</Button>
      </div>
    )
  }
}

export default Homepage
