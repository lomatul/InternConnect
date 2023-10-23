import Admin from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import passport from 'passport';


export const postlogin= (req, res, next) =>{

    // console.log("came in postlogin", req.body)
  
    
    
    passport.authenticate('admin', (err, user, info) => {
        if (err) {
          console.error('Authentication error:', err);
          return res.status(500).json({ error: 'Authentication error' });
        }
    
        if (!user) {
          console.log("it came in user")
          
          console.error('Authentication failed:', info.message);
          return res.status(401).json({ error: info.message });
        }
        user.password=undefined
        // user.role = 'admin';
        // console.log(user.role)
        // console.log(user)
        // Authentication succeeded
            res.status(200).json({ message: 'Logged In' , User:user}); //, role:"admin"},
      })(req, res, next);
    }
    
  export const logout = (req, res)=>{
    req.logout('admin',(err) => {
      if (err) {
        res.json({ error: err });
      } else res.status(200).json({message:"Logged out"});
    });
  }

export const register = async (req, res) => {
    const {Name, Email, password, Guideline} = req.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    try {
      const admin = new Admin({
        name: Name,
        email: Email,
        password: hash,
        guideline:Guideline 
        
      });
      
      await admin.save();
      console.log("admin created", admin)
      res.status(200).json({admin});
     } catch (error) {
      console.error(error);
      res.json({error: error.message});
       
    }
}