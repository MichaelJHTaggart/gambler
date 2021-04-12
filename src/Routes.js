import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import SlotMachine from './Components/SlotMachine';
import ForgotPassword from './Components/ForgotPassword';
import CountryList from './Components/CountryList';
import Country from './Components/Country';

export default (
 <Switch>
  <Route exact path='/' component={HomePage} />
  <Route exact path='/login' component={Login} />
  <Route exact path='/register' component={Register} />
  <Route exact path='/slotmachine' component={SlotMachine} />
  <Route exact path='/forgot-password' component={ForgotPassword} />
  <Route exact path='/countryList' component={CountryList} />
  <Route exact path='/:name' component={Country} />
 </Switch>
)