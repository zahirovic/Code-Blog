const { Comment } = require('../models');

const commentdata = [
  {
    body: "Great Concert",
    user_id: 1,
    post_id: 6,
  },
  {
    body: "I loved this show",
    user_id: 2,
    post_id: 5,
  },
  {
    body: "Can't wait to go back",
    user_id: 3,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;