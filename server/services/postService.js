const Post = require("../models/Post");

exports.create = (imagePath, userId, description) => Post.create({image:imagePath, owner:userId, description:description});

'exports.create = () => Post.find({}).lean();'