import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Radio } from 'semantic-ui-react'

class Register extends React.Component{

  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  handleInput = (event) => {
  this.setState({[event.target.name]: event.target.value
    })
  }

handleSubmit = (event) => {
 event.preventDefault();
 console.log(this.props);
 if (this.state.password === this.state.passwordConfirmation){
 this.props.onSubmit(this.state.email, this.state.password, this.props.history.push)
} else {
 this.setState({errors: ['Passwords do not match']})
}
}


  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>

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
           Are you an Owner?
         </Form.Field>
        <Form.Field>
            <Radio
              label='Yes'
              name='radioGroup'
              value='Yes'
              checked={this.state.value === 'Yes'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='No'
              name='radioGroup'
              value='No'
              checked={this.state.value === 'No'}
              onChange={this.handleChange}
            />
          </Form.Field>
        <Button color='teal' fluid size='large'>
          Register
        </Button>
      </Segment>
    </Form>
    <Message>
      Have an account? <a href='#'>Log In</a>
    </Message>
  </Grid.Column>
</Grid>

    )
  }
}

export default Register
