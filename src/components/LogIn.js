import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LogIn extends React.Component{

  state = {
    email: '',
    password: '',
    errors: []
  }

  handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
 }

handleSubmit = (event) => {
  const {email, password} = this.state
  event.preventDefault();
 //  if (this.state.password === this.state.passwordConfirmation){
 //this.props.onSubmit(this.state.email, this.state.password, this.props.history.push)
 // } else {
 //  this.setState({errors: ['Invalid Credentials']})
 // }
 console.log('hello from login');
   fetch('http://localhost:3000/api/v1/login', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',

     },
     body: JSON.stringify({ email, password })})
     .then(res => res.json())
     .then(json => {
       if(json.jwt){
         localStorage.setItem('token', json.jwt);
         // localStorage.setItem('user_id', json.user.user.id);
         // localStorage.setItem('email', json.user.user.email);
         // localStorage.setItem('owner', json.user.user.owner
         // callback("/homepage");

         this.props.history.push('/homepage')
     } else {
       this.setState({errors: [json.message]})
     }
     });
}

  render(){
    const errors = this.state.errors.map(error => <h3>{error}</h3>)
    return(
      <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          {errors}
      <Form size='large' onSubmit={this.handleSubmit}>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' onChange={this.handleChange}/>
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          name='password'
          onChange={this.handleChange}
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
