const userService = require("../services/userService");

exports.getUsers = async (req, res) => {
   
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
        
    } catch (err) {
        res.status(400).send(err);
    }
    
}