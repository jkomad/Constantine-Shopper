//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderItems = require("./models/OrderItems");

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, { through: OrderItems });
Order.belongsToMany(Product, { through: OrderItems });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrderItems,
  },
};
