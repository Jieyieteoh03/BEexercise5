const express = require("express");
const router = express.Router();

// import model into router
const Category = require("../models/category");

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Category.find().populate("task"));
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
    });

    await newCategory.save();
    res.status(200).send(newCategory);
  } catch (error) {
    res.status(400).send({ message: error._message });
  }
});

module.exports = router;
