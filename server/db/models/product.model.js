const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sku: {
      type: DataTypes.STRING, /* Ma san pham */
    },
    name: {
      type: DataTypes.STRING, /* Ten san pham */
    },
    origin: {
      type: DataTypes.STRING, /* Xuat xu */
    },
    importDate: {
      type: DataTypes.DATE
    },
    weight: {
      type: DataTypes.FLOAT, /* gram */
    },
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['id'],
      },
      {
        unique: true,
        fields: ['sku'],
        where: {
          deleted_at: null,
        }
      }
    ]
  });

  return Product;
};
