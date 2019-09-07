import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom';

class OwnerHomepage extends React.Component{


  onClick = () => {
      this.props.handleClick(this.props.history.push)
    }


  render(){
    if(!localStorage.getItem('token')){
      this.props.history.push('/login')
    }

    if(localStorage.getItem('owner') === false ){
      this.props.history.push('login')
    }
    return(
      <div>
       <h1>OwnerHomepage</h1>
       <Button onClick={this.onClick}>Log Out</Button>
       <Link to='/deliregister'><Button>Register your Restauraunt</Button></Link>
      </div>
    )
  }
}

export default OwnerHomepage
