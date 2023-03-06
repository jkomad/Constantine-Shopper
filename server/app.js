const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const products = require('../mock_product_data')
console.log(products[0].price * 100)
const testTotal = products[0].price * 100

app.post('/create-payment-intent', async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    currency: 'USD',
    amount: testTotal,
    automatic_payment_methods: {
      enabled: true,
    }
  })

  res.send({clientSecret: paymentIntent.client_secret})
});

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  })
})


module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))
app.use('/create-payment-intent', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
