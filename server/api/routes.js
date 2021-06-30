const express = require('express');
const product = require('./product');
const { response } = require('./../middlewares');

const Router = express.Router();
const middleware = [response];

Router.get('/health-check', async (req, res, next) => {
  try {
    res.json('ok');
  } catch (err) {
    next(err);
  }
});

Router.use('/product', middleware, product);

module.exports = Router;
