
function response (req, res, next) {
  res.success = (data = null, statusCode = 200, message = 'success') => {
    return res.status(statusCode).json({
      status: 'success',
      data: data,
      statusCode,
      message: message
    });
  };

  next();
}

module.exports = {
  response
};
