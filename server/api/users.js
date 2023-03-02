const router = require('express').Router()
const { models: { User, Order, OrderItems }} = require('../db')

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      order: ['id'],
      attributes: ['id', 'username', 'email', 'address', 'imgUrl']
    })
    res.json(users)
  } catch (err) {
      next(err)
  }
})

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'address', 'imgUrl']
    })
    res.json(user)
  } catch (err) {
      next(err)
  }
})

// PUT /api/users/:id/edit
router.put('/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'address', 'imgUrl']
    })
    user.set(req.body)
    await user.save()
    res.json(user)
  } catch (err) {
    console.error(err.message)
    next(err)
  }
})

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'address', 'imgUrl']
    })
    await user.destroy()
    res.json(user)
  } catch (err) {
      console.error(err.message)
      next(err)
  }
})

// GET /api/users/:id/cart
router.get('/:id/cart', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'address', 'imgUrl']
    })
    const order = await Order.findOne({
      where: {
        userId: user.id
      },
      include: [OrderItems]
    })
    res.json(order)
  } catch (error){
    next(error)
  }
})


module.exports = router
