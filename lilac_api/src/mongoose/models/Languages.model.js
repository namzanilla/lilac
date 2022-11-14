const mongoose = require('mongoose')
const { model } = mongoose
const schemas = require('../schemas')

const { LanguagesSchema } = schemas

module.exports = model(LanguagesSchema.options.collection, LanguagesSchema)
