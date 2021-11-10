const Comments = require('../models/comments')
const News = require('../models/news')

const addComment =async (req, res) =>{
  const comment = new Comments(req.body)
  const savedComment =await comment.save()
  await News.findByIdAndUpdate(savedComment.news, {$push:{comments:savedComment._id}}).populate('news')
  res.json(savedComment)

}

module.exports={addComment}