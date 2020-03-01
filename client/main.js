import {Meteor} from "meteor/meteor";
import React from "react";
import ReactDom from "react-dom";
import {Tracker} from "meteor/tracker";

import {Session} from "meteor/session";

import { routes, onChange } from '../imports/routes/route';

import '../imports/startup/Simple-Schema-Configeration.js';



Tracker.autorun(() =>{
const authenticated= !!Meteor.userId();
onChange(authenticated);
});

 Meteor.startup(() =>{
   url="jhdfgjf"
   Meteor.call('Links.insert',url);


ReactDom.render(routes,document.getElementById('app'));
});
