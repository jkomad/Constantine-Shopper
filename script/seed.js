'use strict'

const { db, models: { User, Product, Order, OrderItems } } = require('../server/db')
const users = require('../mock_user_data')
const products = require('../mock_product_data')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const createdUsers = await Promise.all(users.map((user) => {
    return User.create(user)
  }))

  const createdProducts = await Promise.all(products.map((product) => {
    return Product.create(product)
  }))

  const order = await createdUsers[0].createOrder({
    total: 500,
    isFulfilled: false
  })

  await order.addProduct(createdProducts[0], { through: { quantity: 2 } })

  console.log(`seeded ${createdUsers.length} users`)
  console.log(`seeded ${createdProducts.length} products`)
  console.log(`seeded successfully`)
}



async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed