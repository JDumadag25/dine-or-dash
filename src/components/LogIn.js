import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LogIn extends React.Component{

  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
 }

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.props);
  if (this.state.password === this.state.passwordConfirmation){
  this.props.onSubmit(this.state.email, this.state.password, this.props.history.push)
 } else {
  this.setState({errors: ['Invalid Credentials']})
 }
}

  render(){
    return(
      <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>

      <Form size='large' onSubmit={this.handleSubmit}>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
        />
        <Button color='teal' fluid size='large'>
          Login
        </Button>
      </Segment>
    </Form>
    <Message>
      New to us? <a href='http://localhost:3001/register'>Sign Up</a>
    </Message>
  </Grid.Column>
</Grid>
</div>
    )
  }
}

export default LogIn
