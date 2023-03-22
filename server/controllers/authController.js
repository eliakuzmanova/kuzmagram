// const SECRET = require("../utils/secret");
// const jwt = require("../utils/jsonwebtoken");
const authService = require("../services/authService");

// const decodedToken = await jwt.verify(token, SECRET);

exports.login = async(req, res) => {
    try{
        
    const {email, password} = req.body;
   
    const token = await authService.login(email, password)

   
    res.status(200).json(token).end()
    } catch(err){
        res.status(400).send(err);
    }
}

exports.register = async(req, res) => {

    try{
    const {username, email, password} =req.body ;
  
   const user = await authService.register(username, email, password)
  
    res.status(200).send(user)
    } catch(err){
        res.status(400).send(err);
    }
}