
const logger = require('./logger');

class IoTError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode = 200, message } = err;

  logger.error('[HandleError]', { message: err.message, stack: err.stack });

  res.status(Number(statusCode)).json({
    status: 'error',
    statusCode,
    message,
  });
};

module.exports = {
  IoTError,
  handleError
};
