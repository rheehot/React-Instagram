import React from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </Router>
  )
}

export default App;
