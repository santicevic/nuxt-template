'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // email: admin@gmail.com
    // password: 'password'

    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10));
    const password = await bcrypt.hash(process.env.SEED_PASSWORD, salt);

    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          email: process.env.SEED_EMAIL,
          password,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
