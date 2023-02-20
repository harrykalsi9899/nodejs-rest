const express = require("express");
const Product = require("../models/product");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "handling GET REquests to /products",
  });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  //   product
  //     .save()
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => console.log(err));

  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you discovered the special id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed an ID",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "updated product",
  });
});
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product",
  });
});

module.exports = router;
