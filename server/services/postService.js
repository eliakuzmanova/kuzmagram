const Post = require("../models/Post");

exports.create = (imagePath) => Post.create({image:imagePath});

'exports.create = () => Post.find({}).lean();'