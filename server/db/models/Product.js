const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    description: { 
        type: Sequelize.TEXT,
        allowNull: false
    }, 
    imgUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Product