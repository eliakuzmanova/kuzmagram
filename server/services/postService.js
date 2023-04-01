const Post = require("../models/Post");

exports.create = (imagePath, userId, description) => Post.create({image:imagePath, owner:userId, description:description});

exports.getOne = (postId) => Post.findById(postId).lean();

exports.getAll = () => Post.find({}).populate("owner").lean();

exports.getOneWithLikes = (postId) => Post.findById(postId).populate("likes").lean();

exports.getOneWithRel = (postId) => Post.findById(postId).lean();

exports.getOneWithComments = (postId) => Post.findById(postId).populate("comments.user").lean();

exports.update = (id, data) => Post.findByIdAndUpdate(id, data).lean();

// exports.postComment = (postId , comment) => Post.findByIdAndUpdate(postId, comment).lean();