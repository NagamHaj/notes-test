import {Meteor} from "meteor/meteor";
import React from "react";
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";


import Signup from "../ui/Signup";
import Dashboard from "../ui/Dashboard";
import Notfound from "../ui/Notfound";
import Login from "../ui/Login";


const unauthenticatedpages=["/","/signup"];
const authenticatedpages=["/Dashboard"];
const history = createBrowserHistory();


const privatepages = () => {
if (!Meteor.userId){
  console.log("!Meteor.userId",!Meteor.userId);
  history.replace("/");
}
};

const puplicpages=() => {
if (Meteor.userId){
    console.log("Meteor.userId",Meteor.userId);

  history.replace("/Dashboard");
}
};


export const onChange = (auth) => {
const pathname= location.pathname;
const isunauthenticated=unauthenticatedpages.includes(pathname);
const isauthenticated=authenticatedpages.includes(pathname);
if (auth && isunauthenticated){
history.replace('/Dashboard');
}
else if(!auth && authenticatedpages){
  history.replace('/');
}};


export const routes= (

<Router   history={history} >
<Switch>
<Route exact path="/signup" component={Signup} onEnter={puplicpages}/>
<Route exact path="/"  component={Login} onEnter={puplicpages}/>
<Route exact path="/Dashboard" component={Dashboard} onEnter={privatepages}/>
<Route component={Notfound}/>
</Switch>
</Router>

);
