const { Post } = require('../models');

const postdata = [
  {
    title: 'isnt this cool',
    description: 'look at what i learned',
    user_id: 1,
  },
  {
    title: 'missing you',
    description: 'wish you were here',
    user_id: 2,
  },
  {
    title: `concert`,
    description: 'had a great time',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;