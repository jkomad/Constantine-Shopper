const router = require('express').Router()
const { models: { Product }} = require('../db')
const Product = require('../db/models/Product')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
