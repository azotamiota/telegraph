const express = require('express')
const api = express()
const cors = require('cors')
const postRoutes = require('./routes/posts')


api.use(cors())
api.use(express.json())

api.use('/posts', postRoutes)

api.get('/', (req, res) => {
    res.json('Welcome to the Telegrapgh')
})


module.exports = api
