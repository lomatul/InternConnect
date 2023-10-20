import { Strategy as LocalStrategy } from 'passport-local';
import passport from "passport";
import express from "express";
import Student from '../models/student.model.js';
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

passport.use(
    new LocalStrategy({usernameField: 'student_id', passwordField: 'password'},authstudent)
  );

passport.serializeUser( (user, done) => {    done(null, user)})

passport.deserializeUser( async (student_id, done) => {
  try{
    const user = await Student.findOne({ student_id })
    console.log(user)
    done(null, user)
  }catch(err){
    done(err, null);
  }
  
})
}

