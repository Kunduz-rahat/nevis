const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 26,
    required: true,
    trim: true,
    lowercase:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase:true
  },
  password: {
    type: String,
    max:26,
    required: true,
    trim: true
  },
  role :{
    type:String,
    default:"user"
  }

}, {timestamps:true})
userSchema.pre("save", async function (next){ /// мидлвейр через себя пропускает пользователя
  const user = this
  user.password=await bcrypt.hash(user.password, 10)
  next()
})
userSchema.methods.authenticate = function (password){
  const user= this
  return bcrypt.compare(password, user.password)
}
module.exports = mongoose.model("users", userSchema)