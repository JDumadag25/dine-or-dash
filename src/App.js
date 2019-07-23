import React from 'react';
import logo from './logo.svg';
import './App.css';

import LogIn from './components/LogIn'
import Register from './components/Register'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

class App extends React.Component{

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route path="/login" render={(props) => <LogIn/>} />

          <Route path="/register" render={(props) => <Register submitLabel="Register"/>} />

        </Switch>
      </Router>
    )
  }
}

export default App;
