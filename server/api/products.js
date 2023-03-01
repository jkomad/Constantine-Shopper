const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// POST /api/products
router.post('/', async (req, res, next) => {
  try{
    const product = await Product.create(req.body)
    res.status(201).send(product)
  } catch(err) {
    next(console.log(err))
  }
})
