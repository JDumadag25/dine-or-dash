import React from 'react';
import logo from './logo.svg';
import './App.css';

import LogIn from './components/LogIn'
import Register from './components/Register'
import Homepage from './components/Homepage'
import Splashpage from './components/Splashpage'

import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

class App extends React.Component{

  register = (email, password, value, callback) => {
    console.log('posting');
    fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password, value })})
      .then(res => res.json())
      .then(json => {
        if(json.token){
        localStorage.setItem('token', json.token);
        localStorage.setItem('user_id', json.user_id);
        localStorage.setItem('username', json.email);
        localStorage.setItem('owner', json.value);

        callback("/homepage");
      } else {
        console.log(json.errors);
        this.setState({errors:[json.errors]})
      }
      });
    }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Splashpage} />

          <Route path="/login" render={(props) => <LogIn/>} />

          <Route path="/register" render={(props) => <Register submitLabel="Register" onSubmit={this.register} {...props}/>} />

        { localStorage.getItem('token') ? <Route exact path="/home" render={(props) => <Homepage/>} /> : <Redirect to="/login" /> }
        </Switch>
      </Router>
    )
  }
}

export default App;
