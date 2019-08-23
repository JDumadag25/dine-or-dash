import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const options = [
  { text: 'California ', value: 'california' },
  { text: 'New Jersey', value: 'new jersey' },
  { text: 'New York', value: 'new york' },
]

class DeliRegistration extends React.Component {

  render(){
    return(
    <Form>
      <Form.Field>
        <label>Establishment Name</label>
        <input placeholder='Establishment Name' />
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <input placeholder='Address' />
      </Form.Field>
        <Form.Group widths='equal'>
           <Form.Input fluid label='City' placeholder='City' />
           <Form.Select fluid label='State' options={options} placeholder='State' />
           <Form.Input fluid label='zipcode'  placeholder='zipcode' />
         </Form.Group>
      <Button type='submit'>Submit</Button>
  </Form>
    )
  }
}

export default DeliRegistration
