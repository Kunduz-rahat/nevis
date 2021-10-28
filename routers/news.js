const express = require('express')
const router = express.Router()
const {createPost, getAllNews} =require('../controllers/news')



router.post("/", createPost)
router.get("/", getAllNews)



module.exports = router