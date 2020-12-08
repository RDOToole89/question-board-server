"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Roibin",
          lastName: "O'Toole",
          email: "roibinotoole@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          classNo: 46,
          isTeacher: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Thibaud",
          lastName: "Szymczak",
          email: "thibaud@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          classNo: 46,
          isTeacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Matias",
          lastName: "Garcia",
          email: "matias@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          classNo: 46,
          isTeacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jeroen",
          lastName: "de Bruin",
          email: "jeroen@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          classNo: 46,
          isTeacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rein",
          lastName: "op 't Land",
          email: "rein@gmail.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          classNo: 46,
          isTeacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
