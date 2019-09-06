import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox} from 'semantic-ui-react'

class Register extends React.Component{

  state = {
    errors: [],
    owner: false
  }

toggleOwner = async () => {

  const owner = !(this.state.owner);
  await this.setState({owner})

}

  handleInput = (event) => {
  this.setState({[event.target.name]: event.target.value
    })
  }

handleSubmit = (event) => {
  const {email, password, owner} = this.state;
   event.preventDefault();
   console.log(this.props);
   if (this.state.password === this.state.passwordConfirmation){
   //this.props.onSubmit(this.state.email, this.state.password, this.state.owner, this.props.history.push)
   console.log('posting');
   fetch('http://localhost:3000/api/v1/users', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     },
     body: JSON.stringify({ email, password, owner})})
     .then(res => res.json())
     .then(json => {
       console.log(json);
       if(json.token){
       localStorage.setItem('token', json.token);
       localStorage.setItem('user_id', json.user.user.id);
       localStorage.setItem('email', json.user.user.email);
       localStorage.setItem('owner', json.user.user.owner);
       //callback("/homepage");

       this.props.history.push('/ownerhomepage')
     } else {
       console.log(json.errors);
       this.setState({errors:[json.errors]})
     }
     });
  } else {
   this.setState({errors: ['Passwords do not match']})
  }
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
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' onChange={this.handleInput} />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          name='password'
          onChange={this.handleInput}
        />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Comfirm Password'
          type='password'
          name='passwordConfirmation'
          onChange={this.handleInput}
        />
        <Form.Field>
          <Checkbox label='Are you an owner?' onChange={this.toggleOwner}/>
        </Form.Field>

        <Button color='teal' fluid size='large'>
          Register
        </Button>
      </Segment>
    </Form>
    <Message>
      Have an account? <a href='http://localhost:3001/login'>Log In</a>
    </Message>
  </Grid.Column>
</Grid>
</div>
    )
  }
}

export default Register
