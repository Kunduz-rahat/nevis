const express = require('express')
const router = express.Router()
const {createPost, getAllNews, getNewsInfo} =require('../controllers/news')



router.post("/", createPost)
router.get("/", getAllNews)
router.get("/:id", getNewsInfo)



module.exports = router