const router = require('express').Router()
module.exports = router
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res, next) => {
  try{
    const response = await req.body

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: response.amount,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log(paymentIntent)
    res.send({ clientSecret: paymentIntent.client_secret });

  } catch (err) {
    console.log(err)
  }
})
