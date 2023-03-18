const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image: {
        type: String
     },
    // description: {
    //     type: String,
    // },
    // likes: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }],
    // comments: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // }],
    // owner: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User"
    // },
});

const Post = mongoose.model('add', postSchema);

module.exports = Post;