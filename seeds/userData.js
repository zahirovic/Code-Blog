const { User } = require('../models');

const userdata = [
  {
    username: 'cyj',
    email: 'cyj@cyj.com',
    password: 'cyj0913',
  },
  {
    username: 'kth',
    email: 'kth@kth.com',
    password: 'kth0205',
  },
  {
    username: 'pjs',
    email: 'pjs@pjs.com',
    password: 'pjs02',
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;