const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') /// взаимодействует с нашей базой
const chalk = require('chalk')
require('dotenv').config()
const authRouter = require("./routers/auth")


const server = express()
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(chalk.blue("DB in started")))
  .catch(() => console.log(chalk.red("DB in not started")))


server.use(cors())
server.use(express.json())

server.use('/api/v1', authRouter)
const port = 8000
server.listen(process.env.PORT || port, () => {
  console.log(chalk.green("server in started"))
})