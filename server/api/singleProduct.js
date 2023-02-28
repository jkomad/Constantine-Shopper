const router = require("express").Router();
const {
  models: { Product },
} = require("../db");
module.exports = router;

// GET /api/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      const error = new Error("That product does not exist");
      error.status = 404;
      throw error;
    }
    res.send(product);
  } catch (error) {
    next(error);
  }
});
