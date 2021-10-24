import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Private from "../../pages/Private";
import Admin from "../../pages/Admin";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import App from "../../App";



const Routes = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/private" component={Private}/>
      <Route exact path="/admin" component={Admin}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/signin" component={Signin}/>
    </Switch>
    </Router>
  );
};

export default Routes;