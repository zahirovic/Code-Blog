const { User } = require('../models');

const userdata = [
  {
    username: 'cyj',
    email: 'cyj.com',
    password: 'cyj913',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;