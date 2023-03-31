const userService = require("../services/userService");
const postService = require("../services/postService");

exports.getOne = async (req, res) => {

    try {
        const { email } = req.body
        const user = await userService.getOne(email);
        res.status(200).send(user);

    } catch (err) {
        res.status(400).send(err);
    }

}

exports.getOneByUsernameWithRel = async (req, res) => {

    try {
        const { username } = req.body

        const user = await userService.getOneByUsernameWithRetentions(username);

        res.status(200).send(user);

    } catch (err) {
        res.status(400).send(err);
    }

}

exports.getOneWithNonFollow = async (req, res) => {

    try {
 
        const { id } = req.body
  
        const nonFollow = []
        const user = await userService.getOneWithNonFollow(id);
        const follows = user.follow

        const allUsers = await userService.getAll()

        for (const user of allUsers) {
            let isNonFollow = [];
            
           follows.map((follow) => {
            
            (follow._id.toString() !== user._id.toString()) && (user._id.toString() !== id)
            ? isNonFollow.push(true)
            : isNonFollow.push(false)
          
           })
           if(!follows.length && (user._id.toString() !== id)) {
            isNonFollow.push(true)
           }
      
          
           if(!isNonFollow.includes(false) && isNonFollow.length) {
           
            nonFollow.push(user);
            
        }
         }
        // console.log(nonFollow);
        const users = nonFollow.slice(0,3)
        // console.log(users);
        res.status(200).send(users);

    } catch (err) {
        res.status(400).send(err);
    }

}

exports.editProfile = async (req, res) => {

    try {

        const imagePath = req.file.path
        const { userId, description, username, email } = req.body

        await userService.updateUserById(userId, { description, username, email, image: imagePath });
        res.status(200).end();

    } catch (err) {
        res.status(403).send(err);
    }

}


exports.addFollower = async (req, res) => {

    try {

        const { email, userId } = req.body

        const user = await userService.getOne(email)
        user.followers.push(userId)
        await userService.updateUserById(user._id, user)
        const updatedUser = await userService.getOneByUsernameWithRetentions(user.username);

        const follower = await userService.getOneById(userId);
        follower.follow.push(user._id)
        await userService.updateUserById(userId, follower)


        res.status(200).send(updatedUser);

    } catch (err) {
        res.status(403).send(err);
    }

}

exports.removeFollower = async (req, res) => {

    try {

        const { email, userId } = req.body
        const user = await userService.getOne(email)

        const filteredFollowers = user.followers.filter(f => f._id.toString() !== userId)

        await userService.updateUserById(user._id, { ...user, followers: filteredFollowers })
        const updatedUser = await userService.getOneByUsernameWithRetentions(user.username);

        const follower = await userService.getOneById(userId);

        const filteredFollow = follower.follow.filter(f => f._id.toString() !== user._id.toString())

        await userService.updateUserById(userId, { ...follower, follow: filteredFollow })

        res.status(200).send(updatedUser);

    } catch (err) {
        res.status(403).send(err);
    }

}

exports.deleteUser = async (req, res) => {

    try {

        const { userId } = req.body

        await userService.delete(userId);

        res.status(200).end();

    } catch (err) {
        res.status(403).send(err);
    }

}

exports.getUserWithFollow = async (req, res) => {

    try {

        const posts = []
        const { userId } = req.body

        const user = await userService.getOneById(userId)
     
        const allPosts = await postService.getAll()
       
        const follows = user.follow

        for (const post of allPosts) {
   
            for (const foll of follows) {
                
                if (foll.toString() == post.owner._id.toString()) {
                    posts.push(post);
                }
            }

            if(userId == post.owner._id.toString()) {
                posts.push(post);
            }
        }

        const reversedPosts = posts.reverse();

        res.status(200).send(reversedPosts);

    } catch (err) {
        res.status(403).send(err);
    }

}
