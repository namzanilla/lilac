const mongoose = require('mongoose')
const { Schema } = mongoose

const code = {
  type: String,
  required: true,
  unique: true,
  index: true,
  enum: ['uk', 'ru', 'en'],
}
const name = { type: String, required: true }
const definition = { code, name }
const options = {
  collection: 'Languages',
  timestamps: true,
}

module.exports = new Schema(definition, options)
