const News = require("../models/news")
const User= require("../models/user")

const getAllNews = async (req, res)=>{
  try {
    const news = await  News.find({}).populate('user', "-password")
    res.json(news)
  }catch (e) {
    res.status(400).json({message: 'Ошибка сохранения'})
  }
}


const createPost =  async (req, res)=>{
  try {
    const newPost = new News(req.body)
    const saved = await newPost.save()
    await User.findByIdAndUpdate(saved.user, {$push:{news:saved._id}})
    return  res.json(saved)
  }catch (e) {
    res.status(400).json({message: 'Ошибка сохранения'})
  }
}

const getNewsInfo = async (req, res)=>{
  try{
    const newsInfo = await News.findById(req.params.id).populate('comments').populate({
      path:'comments',
      populate:"user"
    })
    res.json(newsInfo)
  }catch (e) {
    return res.status(401).json({message: "Не удалось получить новость"})
  }
}



module.exports={createPost, getAllNews,getNewsInfo}