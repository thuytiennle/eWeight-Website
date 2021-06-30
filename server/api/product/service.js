const { getRequestPagination, generateQRCode } = require('./../../utils');
const moment = require('moment');
const { IoTError } = require('./../../utils/error');
const {
  sequelize,
  Sequelize,
} = require('./../../db');

const { models } = sequelize;
const { Product } = models;
const { Op } = Sequelize;

const formatProductItem = async (product) => {
  if (product instanceof Product) {
    product = product.toJSON();
  }

  const item = {
    id: product?.id,
    name: product?.name,
    sku: product?.sku,
    origin: product?.origin,
    weight: Number(product?.weight ?? 0),
    importDate: moment.utc(product?.importDate).format('DD/MM/YYYY')
  }

  item.qrCode = await generateQRCode(`SKU: ${item.sku} | Product: ${item.name} | Origin: ${item.origin} | Date: ${product?.importDate} | Weight: ${item.weight}`);

  return item;
};

module.exports = {
  createMulti: async (data = {}) => {
    try {
      let rows = await Product.bulkCreate(data, {
        updateOnDuplicate: ['name', 'origin', 'importDate', 'weight'],
        validate: true,
        returning: true,
      });

      const updateProducts = rows.filter((p) => p.id == null);

      // if (updateProducts.length === rows.length) {
      //   const skuProducts = rows.reduce((result, item) => {
      //     item?.sku && result.push(item.sku);
      //     return result;
      //   }, []);

      //   rows = await Product.findAll({
      //     where: {
      //       sku: {
      //         [Op.in]: skuProducts
      //       }
      //     }
      //   });
      // }

      // const products = [];
      // for (let i = 0; i < rows?.length; i++) {
      //   products.push(await formatProductItem(rows[i]));
      // }

      // return products;

      return { total: rows.length, duplicate: updateProducts.length }
    } catch (err) {
      throw err;
    }
  },

  getList: async (query = {}) => {
    try {
      const { name = '', sku = '', origin = '', weight = null } = query;
      const { limit, offset } = getRequestPagination(query);

      const whereFilter = {};
      if (name) {
        whereFilter.name = {
          [Op.like]: `%${name}%`
        };
      }

      if (sku) {
        whereFilter.sku = {
          [Op.like]: `%${sku}%`
        };
      }

      if (origin) {
        whereFilter.origin = {
          [Op.like]: `%${origin}%`
        };
      }

      if (weight && !isNaN(Number(weight))) {
        whereFilter.weight = Number(weight);
      }

      const { rows, count } = await Product.findAndCountAll({
        where: whereFilter,
        limit: limit,
        offset: offset,
        order: [
          ['createdAt', 'DESC']
        ]
      });

      const products = [];
      for (let i = 0; i < rows?.length; i++) {
        products.push(await formatProductItem(rows[i]));
      }

      return { rows: products, count };
    } catch (err) {
      throw err;
    }
  },

  getById: async (id) => {
    try {
      const product = await Product.findByPk(id);

      if (!product) {
        throw new IoTError(404, 'Product not found');
      }

      return await formatProductItem(product);
    } catch (err) {
      throw err;
    }
  }
};
