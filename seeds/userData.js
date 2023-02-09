const { User } = require('../models');

const userdata = [
  {
    username: 'coolguy1',
    email: 'coolguy@cool.com',
    password: 'coolpassword',
  },
  {
    username: 'the_man3',
    email: 'greggregson@aol.com',
    password: 'TheBigBean16',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;