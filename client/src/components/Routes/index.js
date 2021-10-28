import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Private from "../../pages/Private";
import Admin from "../../pages/Admin";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import App from "../../App";
import PrivateRoute from "../PrivateRoute";
import AdminRoute from "../AdminRoute";
import {starUp} from "../../lib/authentication";
import Blog from "../../pages/Blog";
import CreatePost from "../../pages/CreatePost";
import UserInfo from "../../pages/UserInfo";


const Routes = () => {
  useEffect(() => {
   starUp()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/create-post" component={CreatePost}/>
        <Route exact path="/user/:id" component={UserInfo}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <PrivateRoute exact path="/blog" component={Blog}/>
        <PrivateRoute exact path="/private" component={Private}/>
        <AdminRoute exact path="/admin" component={Admin}/>
      </Switch>
    </Router>
  );
};

export default Routes;