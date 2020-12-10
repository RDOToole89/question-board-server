require("dotenv").config(); // we configure dotenv
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL,
    dialect: "postgres",
    pool: {
      max: 1,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};
