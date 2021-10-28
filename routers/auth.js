const express = require('express')
const router = express.Router()
const {signup, signin, isAuthentication, getUserInfo} =require('../controllers/auth')


router.post("/signup", signup)
router.post("/signin", signin)
router.get("/user/:id", getUserInfo)
router.post("/authentication", isAuthentication)


module.exports = router