const UserModel = require("../Models/User.js");
const express = require('express');
const router = express.Router();

const registerUser = async (req, res) => {
    const { username, email, password , lname, fname} = req.body;
    // let userExists = await userModel.findOne({ email });

    const newUser = new UserModel({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      lname: req.body.lname,
      fname:req.body.fname
    });

    // if (userExists) {
    //   return res.status(400).json("User with email already exists");
    // }

    // if (!username || !email || !password || !lname || !fnam) {
    //   return res.status(400).json("All fields are required");
    // }

    const user = new userModel({ username, email, password, fname, lname});
    await user.save();

    return res.status(200).json({ _id: user._id, username, email, password });

};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json("Invalid password or username");
    }

    // Add logic to compare passwords if needed

    return res.status(200).json({ _id: user._id, username });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal Server Error");
  }
};

const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
};

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUser);

module.exports = router;
