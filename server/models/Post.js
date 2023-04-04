const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        maxLength: [150, "Too long description"]
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        comment: String
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;