const Post = require('../models/Post');
const User = require('../models/User');

const getAllPosts = async (root, args) => {
    const posts = await Post.find().populate('user');
    return posts;
 }

const getPost = async(root, args) => {
    const post = await Post.findById(args.id).populate('user');
    if(!post) throw new Error('No se encontro el post');
    return post.toObject();
}

const getUsers = async (root, args) => {
    const users = await User.find().exec();
    return users
}

 module.exports = {
     getAllPosts,
     getPost,
     getUsers
 }