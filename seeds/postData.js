const { Post } = require('../models');

const postdata = [
  {
    title: 'Cool Post 1',
    description: 'My super cool post.',
    user_id: 1,
  },
  {
    title: 'Cool Post 2',
    description: 'My second super cool post.',
    user_id: 1,
  },
  {
    title: `Greg's Greg-tastic Post`,
    description: 'Greg gregson yeaaah B)',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;