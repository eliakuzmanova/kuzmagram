const User = require("../models/User");

exports.getOne = (email) => User.findOne({email}).lean();

exports.getOneById = (userId) => User.findById(userId).lean();

exports.getOneByUsernameWithRetentions = (username) => User.findOne({username}).populate("posts").lean();

exports.updatePostsById = (userId, data) => User.findByIdAndUpdate(userId, data)
// exports.getOneByUsernameWithRetentions = (username) => User.findOne({username}).populate("posts").lean();

// exports.getById = (id) => Add.findById(id).lean();

// exports.create = (data, userId) => Add.create({...data, author: userId}); // <---- check owner

// exports.update = (data, id) => Add.findByIdAndUpdate(id, {...data});

// exports.delete = (id) => Add.findByIdAndRemove(id)

// exports.getFirstThree = () => Add.find({}).limit(3).lean();

// exports.getByIdWithAuthor= (id) => Add.findById(id).populate("author").populate("appliers").lean();

// exports.getAllAddsPop = () => Add.find({}).populate("author").lean();