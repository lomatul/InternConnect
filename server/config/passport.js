import { Strategy as LocalStrategy } from 'passport-local';
import passport from "passport";
import express from "express";
import Student from '../models/student.model.js';
import Admin from '../models/admin.model.js';
import bcrypt from 'bcrypt';

export function initializepassport(passport){

const authstudent= async (student_id, password, done) => {
  
  const user = await Student.findOne({ student_id })

  if (!user) {
    return done(null, false, { message: 'Incorrect username.', status:1});
  }

  

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return done(null, false, { message: 'Incorrect password.', status:2 });
  }

  if (!user.accountActivationStatus) {
    return done(null, false, {  message:"Account is not activated", status:0, Id:user.student_id});
  }

  return done(null, user);
}

const authadmin= async (username, password, done) => {
  
  const user = await Admin.findOne({name: username })

  if (!user) {
    return done(null, false, { message: 'Incorrect username.'});
  }

  

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return done(null, false, { message: 'Incorrect password.'});
  }

  

  return done(null, user);
}

passport.use('student',
    new LocalStrategy({usernameField: 'student_id', passwordField: 'password'},authstudent)
);

passport.use('admin',
  new LocalStrategy({usernameField: 'username', passwordField: 'password'},authadmin)
);

passport.serializeUser( (user, done) => {    done(null, user)})

passport.deserializeUser(async (id, done) => {
  console.log("in deseralize user")
  try {
    const student = await Student.findById(id);
    if (student) {
      console.log(student);
      done(null, student);
    } else {
      const admin = await Admin.findById(id);
      console.log(admin);
      done(null, admin);
    }
  } catch (err) {
    done(err, null);
  }
});

// passport.deserializeUser( async (username, done) => {
//   try{
//     const user = await Admin.findOne({ username })
//     console.log(user)
//     done(null, user)
//   }catch(err){
//     done(err, null);
//   }
  
// })
}



