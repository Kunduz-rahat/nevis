const Users = require("../models/user")
const jwt = require('jsonwebtoken')

const signup = (req, res) => {
  const {name, password, email} = req.body
  Users.findOne({email}).exec((error, user) => {
    if (user) {
      return res.status(400).json({message: "Такой пользователь уже существует"})
    }
    const newUser = new Users(req.body)
    newUser.save((error, user) => { //// сохрание пользователя
      if (error) {
        return res.status(400).json({message: 'Ошибка сохранения'})
      }
      return res.json({message: "Пользователь успешно зарестрирован. Войдите на сайт"})
    })
  })
}

const signin = (req, res) => {
  const {email, password} = req.body
  Users.findOne({email}).exec(async (error, user)=>{
    if (!user) {
      return res.status(400).json({message: "Пользователя не существует"})
    }
    if(!await user.authenticate(password)){
      return  res.status(401).json({message: "Неверный пароль"})
    }
    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:"2d"})
    return res.json({
      token,
      user:{_id:user._id, email:user.email, role:user.role, name: user.name}
    })
  })
}

module.exports = {signup, signin}