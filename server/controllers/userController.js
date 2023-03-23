const userService = require("../services/userService");

exports.getOne = async (req, res) => {
   
    try {
      const {email} = req.body
      console.log("Hello from getUser");
      console.log(req.body);
 
        const user = await userService.getOne(email);
        console.log("Hello after getUser");
        console.log(user);
        res.status(200).send(user);
        
    } catch (err) {
        res.status(400).send(err);
    }
    
}