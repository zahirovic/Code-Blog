const { Post } = require('../models');

const postdata = [
  {
    title: 'concert',
    description: 'went to a concert',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;