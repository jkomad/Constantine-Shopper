const router = require("express").Router();
const {
  models: { Product, Order },
} = require("../db");
const OrderItems = require("../db/models/OrderItems");
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

// PUT /api/products/:id
router.put("/:id", async (req, res, next) => {
  try {
    const productToBeUpdated = await Product.findByPk(req.params.id);

    if (!productToBeUpdated) {
      const error = new Error("That product does not exist");
      error.status = 404;
      throw error;
    }

    const updatedProduct = await productToBeUpdated.update(req.body);
    res.send(updatedProduct);

  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const productToBeDeleted = await Product.findByPk(id);

    if (!productToBeDeleted) {
      const error = new Error("That product does not exist");
      error.status = 404;
      throw error;
    } else {
      const orderItems = await OrderItems.findAll({
        where: {
          productId: productToBeDeleted.id
        }
      })
      if(orderItems.length === 0) {
        await productToBeDeleted.destroy()
        res.send(productToBeDeleted)
      } else {
        for (let i = 0; i < orderItems.length; i++) {
          const order = await Order.findOne({
            where: {
              id: orderItems[i].orderId
            }
          })
          order.total -= productToBeDeleted.price * orderItems[i].quantity
          await order.save()
          await productToBeDeleted.destroy();
        }
        res.send(productToBeDeleted);
      }
    }
  } catch (error) {
    next(error);
  }
});
