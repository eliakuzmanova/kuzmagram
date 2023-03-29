const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt  = require("../utils/jsonwebtoken");
const SECRET = require("../utils/secret");

exports.register = async (username, email, password) => {

    const hashPassword = await bcrypt.hash(password, 10);

    try{
        const existingUsername = await this.findUserByUsername(username)
        
        const existingEmail = await this.findUserByEmail(email)
       
        if(existingUsername || existingEmail) {
            throw Error("Existing user")
        }

        const user = await User.create({username, email, password: hashPassword})
   
        return user
    } catch(err){ 
        console.log(err);
        throw Error(err)
    }

};

exports.findUserByUsername = (username) => User.findOne({username});

exports.findUserByEmail = (email) => User.findOne({email})

exports.login = async(email, password) => {

     try{
        const existingUser = await this.findUserByEmail(email)
  
        if(!existingUser) {
            throw Error("Invalid email");
        }
      
        const isValid = await bcrypt.compare(password, existingUser.password)
        
        if(!isValid){
          throw Error("Invalid password")
        }
      
        const token = await jwt.sign({},SECRET);
      
        return token

    } catch(err){ 
       
        console.log(err);
        throw Error(err)
    }
  
}