const { Comment } = require('../models');

const commentdata = [
  {
    body: 'Miss you!',
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;