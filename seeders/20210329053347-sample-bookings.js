'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkInsert(
      'Bookings',
      [
        {
          firstName: "jye",
          lastName: "robinson",
          phoneNum: "0400117358",
          location: "Deck",
          persons: "6",
          date: "1/04/2021",
          time: "11:30am",
          requests: "highchair needed",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "bob",
          lastName: "bobet",
          phoneNum: "0400111111",
          location: "Pool Room",
          persons: "2",
          date: "10/04/2021",
          time: "12:30am",
          requests: "",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
      );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
