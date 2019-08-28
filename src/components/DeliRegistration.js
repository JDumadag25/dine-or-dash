import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const options = [
  { text: 'California ', value: 'california' },
  { text: 'New Jersey', value: 'new jersey' },
  { text: 'New York', value: 'new york' },
]

class DeliRegistration extends React.Component {


  handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
 }

 handleSubmit = () => {
   console.log('click');
 }

  render(){

    if(!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
    
    return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>Establishment Name</label>
        <input placeholder='Establishment Name' name='establishmentname' onChange={this.handleChange}/>
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <input placeholder='Address' name='address' onChange={this.handleChange}/>
      </Form.Field>
        <Form.Group widths='equal'>
           <Form.Input fluid label='City' name='city' placeholder='City' onChange={this.handleChange} />
           <Form.Select fluid label='State' name='state' options={options} placeholder='State' onChange={this.handleChange}/>
           <Form.Input fluid label='zipcode' name='zipcode'  placeholder='zipcode' onChange={this.handleChange}/>
         </Form.Group>
      <Button type='submit'>Submit</Button>
  </Form>
    )
  }
}

export default DeliRegistration
