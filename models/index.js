const user = require('/user');
const post = require('/post');
const comment = require('/comment')

User.hasMany(post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

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