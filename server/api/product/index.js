const express = require('express');
const controller = require('./controller');
const { handleUploadSingle } = require('./../../middlewares/upload')

const routes = express.Router();

routes.get('/', controller.getList);
routes.get('/:id', controller.getById);
routes.post('/upload', handleUploadSingle, controller.upload);

module.exports = routes;
