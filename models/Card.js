const mongoose = require('mongoose')

const cardSchema = {
  title: { type: String, required: true },
  author: { type: String, required: true },
  votes: Number,
}

module.exports = mongoose.model('Card', cardSchema)
