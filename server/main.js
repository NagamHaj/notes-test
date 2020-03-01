import { Meteor } from 'meteor/meteor';
import {WebApp} from "meteor/webapp";

import '../imports/api/users';
import '../imports/startup/Simple-Schema-Configeration.js';
Meteor.startup(() => {

      });

































  // code to run on server at startup


  // try{
  //   throw new Meteor.Error(400,'message I put about error' );}
  // catch(e){
  //   console.log(e);
  // }

// const employeeschema=new SimpleSchema({
//
// name:{
// type:String,
// min:1,
// max:200
//
// },
// hourwage:{
// type: Number,
// min: 0
//
//
// },
// email: {
// type:String,
// regEx: SimpleSchema.RegEx.Email
//
//
// }
//
// });
//
// employeeschema.validate({
// name: "Ali",
// hourwage: 200,
// email: "drfg@oiuregiuorg.diukhih"
//
// });
