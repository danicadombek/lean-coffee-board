const mongoose = require('mongoose')

const cardSchema = {
  title: String,
  author: String,
  votes: Number,
}

module.exports = mongoose.model('Card', cardSchema)
