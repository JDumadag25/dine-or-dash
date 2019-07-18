import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Radio } from 'semantic-ui-react'

class Register extends React.Component{

  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render(){
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>

      <Form size='large'>
      <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
        />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Comfirm Password'
          type='password'
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
