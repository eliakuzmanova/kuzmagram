const userService = require("../services/userService");

exports.getOne = async (req, res) => {
   
    try {
      const {email} = req.body
        const user = await userService.getOne(email);
        res.status(200).send(user);
        
    } catch (err) {
        res.status(400).send(err);
    }
    
}

exports.getOneByEmailWithRel = async (req, res) => {
   
    try {
      const {username} = req.body

        const user = await userService.getOneByUsernameWithRetentions(username);
       
        res.status(200).send(user);
        
    } catch (err) {
        res.status(400).send(err);
    }
    
}

exports.editProfile= async (req, res) => {
          
    try {
        console.log("Hello from ");
        const imagePath = req.file.path
        const {userId, description, username, email} = req.body
        console.log(imagePath + " <------------------------- img path ");
       
        await userService.updatePostsById(userId, {description, username, email, image:imagePath});
        res.status(200).end();
        
    } catch (err) {
        res.status(403).send(err);
    }
    
}