const postService = require("../services/postService");
const userService = require("../services/userService");

exports.createPost= async (req, res) => {
          
    try {
        const imagePath = req.file.path
        const {userId, description} = req.body
        // console.log(imagePath + " <------------------------- img path ");
       const post = await postService.create(imagePath, userId, description);
       const user = await userService.getOneById(userId);
       user.posts.push(post._id);
        await userService.updateUserById(userId, user);
        res.status(200).end();
        
    } catch (err) {
        res.status(403).send(err);
    }
    
}