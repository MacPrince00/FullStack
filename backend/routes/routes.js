const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  addProduct,
  editProduct,
  deleteProduct,
  addUser,
  loginUser,
  addToCart,
  fetchUser,
  userCart,
  addCart,
  reduceCart,
  removeCart,
} = require("../controller/controller");

router.route("/products").get(getAllProduct).post(deleteProduct);
router.route("/addproducts").post(addProduct);
router.route("/").patch(editProduct);
router.route("/adduser").post(addUser)
router.route("/login").post(loginUser);
router.route("/addtocart").post(fetchUser, addToCart);
router.route("/userCart").get(fetchUser, userCart);
router.route("/addcart").post(fetchUser, addCart);
router.route("/reducecart").post(fetchUser, reduceCart);
router.route("/removefromcart").post(fetchUser, removeCart);

module.exports = router;
