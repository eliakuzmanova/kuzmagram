const userService = require("../services/userService");

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
     console.log("Hello from addfollower");
        const { email, userId } = req.body
        console.log(email, userId);
        const user = await userService.getOne(email)
        console.log(user);
        user.followers.push(userId)
        await userService.updateUserById(user._id, user)
        console.log("after update user");
        const updatedUser = await userService.getOneByUsernameWithRetentions(user.username);
        console.log(updatedUser);
        const follower = await userService.getOneById(userId);
        follower.follow.push(user._id)
        await userService.updateUserById(userId, follower)
        console.log("after update 2user");

        res.status(200).send(updatedUser);

    } catch (err) {
        res.status(403).send(err);
    }

}

exports.removeFollower = async (req, res) => {

    try {

        const { email, userId } = req.body
        const user = await userService.getOne(email)

        const filteredFollowers = user.followers.filter(f => f._id !== userId)

        await userService.updateUserById(user._id, { ...user, followers: filteredFollowers })
        const updatedUser = await userService.getOneByUsernameWithRetentions(user.username);

        const follower = await userService.getOneById(userId);
        const filteredFollow = follower.follow.filter(f => f._id !== user._id)
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
        console.log("HEllo");
        const posts = []
        const { userId } = req.body
        console.log(userId);

        const userWithFollow = await userService.getOneByUsernameWithFollows(userId)
        console.log(userWithFollow);
       const newPosts = userWithFollow.follow.forEach(async(f) => await userService.getOneByUsernameWithPosts(f._id)); 
console.log(newPosts);
        res.status(200).send(posts);

    } catch (err) {
        res.status(403).send(err);
    }

}
