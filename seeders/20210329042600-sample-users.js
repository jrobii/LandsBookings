'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert(
     'Users',
     [
       {
         userName: "jye",
         password: "YzAwNjdkNGFmNGU4N2YwMGRiYWM2M2I2MTU2ODI4MjM3MDU5MTcyZDFiYmVhYzY3NDI3MzQ1ZDZhOWZkYTQ4NA==",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        userName: "jo",
        password: "YzRkMmNlNWUxZDEyMTQ3MzM1ZDIzMjUxNmU4MzIxYTdhMmZmOTlmYjQ5ZGY3ZjJhNTAwYzY0MWUzZTUwMmM4Ng==",
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
