const fs = require('fs');
const csv = require('fast-csv');
const moment = require('moment');
const { IoTError } = require('./../../utils/error');
const { createMulti, getById, getList, deleteById, updateById } = require('./service');

module.exports = {
  upload: async (req, res, next) => {
    try {
      if (!req.file || !req.file.filename) {
        throw new IoTError(404, 'File not found.');
      }

      const path = __basedir + '/assets/upload/' + req.file.filename;

      const products = await new Promise((resolve, reject) => {
        const products = [];
        const stream = fs.createReadStream(path).pipe(csv.parse({ headers: true }));

        stream.on('error', err => reject(err));
        stream.on('data', row => {
          row.importDate = moment.utc(row?.importDate, 'DD/MM/YYYY', true).toISOString();
          products.push(row);
        });
        stream.on('end', () => resolve(products));
      });

      // Remove file
      // fs.unlinkSync(path);

      const results = await createMulti(products);

      res.success(results);
    } catch (err) {
      return next(err);
    }
  },

  getList: async (req, res, next) => {
    try {
      const { rows, count } = await getList(req.query);

      res.success({ rows, count });
    } catch (err) {
      return next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const result = await getById(req.params.id || 0);

      res.success({ rows: [result], count: 1 });
    } catch (err) {
      return next(err);
    }
  },

  updateById: async (req, res, next) => {
    try {
      const result = await updateById(req.params.id, req.body);

      res.success({ product: result });
    } catch (err) {
      return next(err);
    }
  },

  deleteById: async (req, res, next) => {
    try {
      const result = await deleteById(req.params.id || 0);

      res.success({ product: result });
    } catch (err) {
      return next(err);
    }
  },
};
