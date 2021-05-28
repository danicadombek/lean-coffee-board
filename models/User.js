const mongoose = require('mongoose')

const userSchema = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: {
    type: String,
    required: true,
  },
}

module.exports = mongoose.model('User', userSchema)
