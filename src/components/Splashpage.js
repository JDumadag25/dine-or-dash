import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class SplashPage extends React.Component{

  render(){
    return(
      <div>
       <h1>SplashPage</h1>
       <Link to='/login'><Button>Login</Button></Link>
       <Link to='/register'><Button>Register</Button></Link>
      </div>
    )
  }
}

export default SplashPage

// <Button href='http://localhost:3001/login'>Login</Button>
// <Button href='http://localhost:3001/register'>Register</Button>
