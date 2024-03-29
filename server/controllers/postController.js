const postService = require("../services/postService");
const userService = require("../services/userService");

exports.createPost = async (req, res) => {

    try {
        const imagePath = req.file.path
        const { userId, description } = req.body
        const post = await postService.create(imagePath, userId, description);
        const user = await userService.getOneById(userId);
        user.posts.push(post._id);
        await userService.updateUserById(userId, user);
        res.status(200).end();

    } catch (err) {
        res.status(400).send(err);
    }

}

exports.getOneWithLikes = async (req, res) => {
    try {
        const { postId } = req.params
        const post = await postService.getOneWithLikes(postId)
        res.status(200).send(post);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getOne = async (req, res) => {
    try {
        const { postId } = req.params
        const post = await postService.getOne(postId)
        res.status(200).send(post);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getPostWithComments = async (req, res) => {
    try {
  
        const { postId } = req.params
     
        const post = await postService.getOneWithComments(postId)
       
        res.status(200).send(post);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.likePost = async (req, res) => {
    try {
        const { userId } = req.body
        const { postId } = req.params
        const post = await postService.getOne(postId)
        post.likes.push(userId)
        const updatedPost = await postService.update(postId, post)
        res.status(200).send(updatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.dislikePost = async (req, res) => {
    try {
        const { userId } = req.body
        const { postId } = req.params

        const post = await postService.getOne(postId)
       
        const filteredLikes = post.likes.filter(l => l._id.toString() != userId)
        
        const updatedPost = await postService.update(postId, { ...post, likes: filteredLikes })
     
        res.status(200).send(updatedPost);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.postComment = async (req, res) => {

    try {

        const { comment, userId } = req.body
   
        const { postId } = req.params
        
        const post = await postService.getOne(postId)
       
       post.comments.push({user:userId,comment: comment})

      const result = await postService.update(postId ,post)
      const commentedPost = await postService.getOneWithComments(postId)
        res.status(200).send(commentedPost);

    } catch (err) {
        res.status(400).send(err);
    }

}

exports.updatePost = async (req, res) => {
    try {
        const { postId } = req.params
        const { description } = req.body
        const post = await postService.getOne(postId)
        post.description = description
        await postService.update(postId, post)

        res.status(200).send(post);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { postId } = req.body
    const result = await postService.delete(postId)

        res.status(200).send(result);
    } catch (err) {
        console.log(err + "<--- error");
        res.status(400).send(err);
    }
}