import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar/>

        <div className='container'>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={ HomeScreen }/>
            <Route exact path="/login" component={ LoginScreen }/>
            <Route exact path="/about" component={ AboutScreen }/>
            <Redirect to='/' />
            {/* <Route component={ HomeScreen }/> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}
