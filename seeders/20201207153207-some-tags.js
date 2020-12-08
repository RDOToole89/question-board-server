"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          tagname: "JavaScript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Sequelize",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "TypeScript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Github",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Git",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Python",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Error",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Redux",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "React",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Noob",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "GraphQL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Rest API",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Cloudinary",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Web Sockets",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "SQL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "PostgreSQL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Ubuntu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Heroku",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Firebase",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Authentication",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Axios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Data modeling",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagname: "Database",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
