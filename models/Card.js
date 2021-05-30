const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = {
  text: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  votes: { type: Number, default: 0 },
}

module.exports = mongoose.model('Card', cardSchema)
