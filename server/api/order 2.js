const router = require("express").Router();
const {
  models: { User, Order },
} = require("../db/");

router.get("/:id/order", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id, {
    attributes: ["id", "username", "email", "address", "imgUrl"],
  });
  const userOrder = await Order.findAll({
    where: {
      userId: user.id,
    },
  });
  // console.log(user)
  res.json(userOrder)
});

module.exports = router
