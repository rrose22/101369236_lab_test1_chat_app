const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type:String, required:true, unique:true,},
  fname: {type: String, required: true,},
  lname: {type: String, required: true,},
  password: {type: String, required: true,},
  email: {type: String, required: true,},
  createon: {type:Date}
})
const UserModel = mongoose.model('User', userSchema)
module.exports=UserModel