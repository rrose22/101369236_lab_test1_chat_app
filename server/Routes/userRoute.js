const userModel = require("../Models/User")
const express = require('express')
const router = express.Router();

const registerUser = async (req, res )=> {
  const {username, email, password} = req.body
  
  let user = await userModel.findOne({email});

  if(user){
    return res.status(400).json("User already with email already exists")
  }
  if(!username || !email || !password ) {
    return res.status(400).json("All Fields Required")
  }
  user = new userModel({username, email, password})
  
  await user.save()
  return res.status(200).json({_id: user._id, username, email, password})
}
const loginUser = async (req, res) => {
  const { username, password} = req.body

  try{
    let user = await userModel.findOne({username})
    if(!user){ return res.status(400).json("Invalid password or username")}
    return res.status(200).json({_id: user._id, username, email, password})
  }
}
router.post("/register", (req, res) => {
  res.send("REGISTER")
  registerUser()
})
router.post("/login", (req, res) => {
  res.send("LOGIN")
  loginUser()

})

module.exports = router