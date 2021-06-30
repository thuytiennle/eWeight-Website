const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const { sequelize } = require('./db');

async function assertDatabaseConnectionOk () {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log('✔ Database connection OK!');
  } catch (err) {
    console.error('✘ Unable to connect to the database: \n', err.message);
    process.exit(1);
  }
}

const PORT = process.env.PORT || 8080;

async function init() {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () => {
    console.log(`IoT server started on port ${PORT}.`);
  });
}

init();
