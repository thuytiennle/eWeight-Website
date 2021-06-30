const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME || 'root',
    password: process.env.DEV_DB_PASSWORD || 'root',
    database: process.env.DEV_DB_NAME || 'iot_farm',
    host: process.env.DEV_DB_HOSTNAME || '127.0.0.1',
    port: process.env.DEV_DB_PORT || 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME || 'root',
    password: process.env.PROD_DB_PASSWORD || 'root',
    database: process.env.PROD_DB_NAME || 'iot_farm',
    host: process.env.PROD_DB_HOSTNAME || '127.0.0.1',
    port: process.env.PROD_DB_PORT || 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
