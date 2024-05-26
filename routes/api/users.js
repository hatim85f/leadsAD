const express = require("express");
const User = require("../../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("password");

    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(500).send({
      error: "Error !",
      message: error.message,
    });
  }
});

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post("/", async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const newUser = new User({
      userName,
      email,
      password,
    });

    await User.insertMany(newUser);

    return res.status(200).send({
      message: "User created successfully !",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).send({
      error: "Error !",
      message: error.message,
    });
  }
});

module.exports = router;
