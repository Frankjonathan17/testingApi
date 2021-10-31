const express = require('express');
const app = express()
const songs = require('./api/songs')

app.use('/api/songs',songs)

app.listen(process.env.PORT || 5050 ,()=>console.log('porn opeend'))




