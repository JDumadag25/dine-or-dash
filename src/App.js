import React from 'react';
import logo from './logo.svg';
import './App.css';

import LogIn from './components/LogIn'
import Register from './components/Register'
import Homepage from './components/Homepage'
import Splashpage from './components/Splashpage'
import DeliRegistration from './components/DeliRegistration'

import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

class App extends React.Component{

  componentDidMount = () => {
    this.getProfile()
  }

  getProfile = () => {
    console.log('hello from getting profile');
    const token = localStorage.token
    if(token){
      return fetch("http://localhost:3000/api/v1/profile", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }

  // login = (email, password, callback) => {
  //   console.log('hello from login');
  //     console.log(callback);
  //     fetch('http://localhost:3000/api/v1/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //
  //       },
  //       body: JSON.stringify({ email, password })})
  //       .then(res => res.json())
  //       .then(json => {
  //         if(json.jwt){
  //           localStorage.setItem('token', json.jwt);
  //           // localStorage.setItem('user_id', json.user.user.id);
  //           // localStorage.setItem('email', json.user.user.email);
  //           // localStorage.setItem('owner', json.user.user.owner
  //
  //           callback("/homepage");
  //       } else {
  //         this.setState({errors: [json.errors]})
  //       }
  //       });
  //   }



  // register = (email, password, owner, callback) => {
  //   console.log('posting');
  //   fetch('http://localhost:3000/api/v1/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password, owner})})
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       if(json.token){
  //       localStorage.setItem('token', json.token);
  //       // localStorage.setItem('user_id', json.user.user.id);
  //       // localStorage.setItem('email', json.user.user.email);
  //       // localStorage.setItem('owner', json.user.user.owner);
  //
  //       callback("/homepage");
  //     } else {
  //       console.log(json.errors);
  //       this.setState({errors:[json.errors]})
  //     }
  //     });
  //   }

    logout = (callback) => {
      console.log("logging out");
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('user_id')
      localStorage.removeItem('owner')
      callback('/login')
    }


  render(){
    return(
      <Router>
        <Switch>



          <Route exact path="/" component={Splashpage} />

          <Route path="/login" render={(props) => <LogIn onSubmit={this.login} {...props}  />} />

          <Route path="/register" render={(props) => <Register submitLabel="Register" onSubmit={this.register} {...props}/>} />

          <Route path="/homepage" render={(props) => <Homepage {...props} handleClick={this.logout}/>}/>

          <Route exact path='/deliregister' component={DeliRegistration} />

        // { localStorage.getItem('token') ? <Route path="/homepage" render={(props) => <Homepage {...props} handleClick={this.logout}/>} /> : <Redirect to="/login" /> }
        </Switch>
      </Router>
    )
  }
}

export default App;
