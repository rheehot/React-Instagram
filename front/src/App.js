import React from 'react';
import {
  Login,
  SignUp,
  Home
} from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
