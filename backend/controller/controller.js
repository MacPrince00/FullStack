const Product = require("../models/model");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getAllProduct = async (req, res) => {
  let products = await Product.find({});
  res.status(200).json({ products });
};

const addUser = async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Existing User found with same email" });
  }
  const user = await User.create(req.body);
  const data = {
    user: {
      id: user._id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.status(201).json({ success: true, token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    const passCompare = password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user._id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email" });
  }
};

const editProduct = async (req, res) => {
  const { id: productID } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(createCustomError(`No task with id : ${productID}`, 404));
  }

  res.status(200).json({ product });
};

const deleteProduct = async (req, res) => {
  const { id: productID } = req.body;
  ``;
  const product = await Product.findOneAndDelete({ _id: productID });
  if (!product) {
    return res.status(404).json(`No task with id : ${productID}`, 404);
  }
  res.status(200).json({ product });
};

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

//creating endpoint for adding product in CartData

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "Please authenticate using valid token" });
    }
  }
};

const userCart = async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  res.status(200).json({ userData });
};

const addToCart = async (req, res) => {
  const { itemId } = req.body;
  let userData = await User.findOne({ _id: req.user.id });
  let productData = await Product.findOne({ _id: itemId });
  const checkCart = userData.cartData.some(
    (item) => item.productName === productData.productName
  );

  if (!userData || !productData) {
    return res.status(404).json({ error: "User or product not found" });
  } else {
    if (checkCart) {
      return res.status(400).json({ error: "Product already exists in cart" });
    } else {
      productData.count = 1;
      userData.cartData.push(productData);
    }
    await userData.save();
    res.status(200).json({ message: "Product added to cart", userData });
  }
};

const addCart = async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });

  const Data = userData.cartData;

  const updated = Data.map((item) => {
    if (item.productName === req.body.itemId) {
      // Increment the count of the matching product

      return { ...item, count: item.count + 1 };
    }

    return item;
  });

  userData.cartData = updated;
  await userData.save();
  res.status(200).json(userData.cartData);
};

const reduceCart = async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });

  const Data = userData.cartData;

  const updated = Data.map((item) => {
    if (item.productName === req.body.itemId) {
      if (item.count === 1) {
        return item;
      } else {
        return { ...item, count: item.count - 1 };
      }
    }

    return item;
  });

  userData.cartData = updated;
  await userData.save();
  res.status(200).json(userData.cartData);
};

const removeCart = async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });

  const Data = userData.cartData;

  const updated = Data.filter((item) => item.productName !== req.body.itemId);

  userData.cartData = updated;
  await userData.save();
  res.status(200).json(userData.cartData);
};

module.exports = {
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
};
