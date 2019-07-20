import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';

import LogIn from './components/LogIn'
import Register from './components/Register'
import Homepage from './components/Homepage'

class App extends React.Component{


  render(){
    return(
      <div>

      <LogIn/>

      </div>
    )
  }
}

export default App;
