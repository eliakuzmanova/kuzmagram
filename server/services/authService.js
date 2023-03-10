const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt  = require("../utils/jsonwebtoken");
const SECRET = require("../utils/secret");

exports.register = async (email, password,skills) => {

    const hashPassword = await bcrypt.hash(password, 10);

    try{
        const existingUser = await this.findUser(email)
        
        if(existingUser) {
            throw Error("Existing user")
        }
        return await User.create({email, password: hashPassword, skills})
    } catch(err){ 
        throw Error(err)
    }

};

exports.findUser = (email) => User.findOne({email});

exports.findUserByEmail = (email) => User.findOne({email})

exports.login = async(req,res ,email, password) => {

     try{
        
        const existingUser = await this.findUserByEmail(email)
         
        if(!existingUser) {
            throw Error("Invalid email");
        }

        const isValid = await bcrypt.compare(password, existingUser.password)
 
        if(!isValid){
          throw Error("Invalid password")
        }

        req.user = existingUser
        req.isAuthenticated = true;
    
       res.locals.isAuthenticated = true;
       res.locals.user = existingUser
    
       const payload = {
        userId: existingUser._id,
         userEmail: existingUser.email
        }

        const token = await jwt.sign(payload,SECRET);

        return token

    } catch(err){ 
        throw Error(err)
    }
  
}