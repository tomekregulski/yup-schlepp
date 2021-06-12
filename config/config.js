require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
  production: {
    // username: process.env.DB_USER,
    // password: process.env.DB_PW,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOST,
    url: process.env.JAWSDB_URL,
    dialect: 'mysql',
    logging: false,
  },
};
