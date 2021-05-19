'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert(
     'Users',
     [
       {
        userName: "admin",
        password: "$2b$10$eLxIWHbXnAwg13P1Fmt4jOVZDDgVzav6ankgzXG9bK0H2wMIeC.7K",
        createdAt: new Date(),
        updatedAt: new Date(),
       }
     ],
     {}
     );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
