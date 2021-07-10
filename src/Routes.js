import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Home from './components/Home';
import About from './components/About';
import Navbar from './Navbar';
import Shop from './components/Shop';
// import Error from './components/Error';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/home" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      {/* <Route component={Error} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
