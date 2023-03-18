const Post = require("../models/Post");

exports.create = (image) => Post.create({image:image}).lean();
exports.create = () => Post.find({}).lean();