<<<<<<< HEAD
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
=======
const user = require('/user');
const post = require('/post');
const comment = require('/comment')

User.hasMany(post, {
>>>>>>> 5faed7c9c61ee6e3da69e66940c02621f5c4faf4
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

<<<<<<< HEAD
User.hasMany(Comment, {
=======
User.hasMany(comment, {
>>>>>>> 5faed7c9c61ee6e3da69e66940c02621f5c4faf4
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

<<<<<<< HEAD
Post.hasMany(Comment, {
=======
Post.hasMany(comment, {
>>>>>>> 5faed7c9c61ee6e3da69e66940c02621f5c4faf4
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

<<<<<<< HEAD
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
=======
Post.belongsTo(user, {
  foreignKey: 'user_id'
});

Comment.belongsTo(user, {
    foreignKey: 'user_id'
});

Comment.belongsTo(post, {
    foreignKey: 'post_id'
});

module.exports = { user, post, comment };
>>>>>>> 5faed7c9c61ee6e3da69e66940c02621f5c4faf4
