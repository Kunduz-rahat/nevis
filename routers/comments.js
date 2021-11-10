const express = require('express')
const router = express.Router()
const { addComment} =require('../controllers/comments')



router.post("/", addComment)


module.exports = router