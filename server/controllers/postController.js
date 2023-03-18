const postService = require("../services/postService");

exports.createPost= async (req, res) => {
          
    try {
        const imagePath = req.file.path
        console.log(typeof imagePath);
        console.log(imagePath + " <------------------------- img path ");
        await postService.create(imagePath);
        res.status(200)
        
    } catch (err) {
        res.status(403).send(err);
    }
    
}