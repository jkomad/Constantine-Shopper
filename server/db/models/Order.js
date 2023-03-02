const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  total: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = Order
