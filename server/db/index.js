const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config.js');
const { applyExtraSetup } = require('./extra-setup');

const envName = process.env.NODE_ENV || 'development';
const mysqlConfig = dbConfig[envName];

const poolOptions = {
  max: process.env.MYSQL_POOL_MAX || 5,
  min: process.env.MYSQL_POOL_MIN || 0,
  acquire: process.env.MYSQL_POOL_ACQUIRE || 30000,
  idle: process.env.MYSQL_POOL_IDLE || 10000,
};

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, {
  host: mysqlConfig.host,
  dialect: mysqlConfig.dialect,
  dialectOptions: mysqlConfig.dialectOptions,
  logQueryParameters: (process.env.SEQUELIZE_LOGGING === 'true') ? true : false,
  // pool: poolOptions,
});

const modelDefiners = [
  require('./models/product.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = {
  sequelize,
  Sequelize: sequelize.Sequelize
};
