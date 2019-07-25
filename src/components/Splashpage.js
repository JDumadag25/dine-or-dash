import React from 'react'
import { Button } from 'semantic-ui-react'

class SplashPage extends React.Component{

  render(){
    return(
      <div>
       <h1>SplashPage</h1>
       <Button href='http://localhost:3001/login'>Login</Button>
       <Button href='http://localhost:3001/register'>Register</Button>
      </div>
    )
  }
}

export default SplashPage
