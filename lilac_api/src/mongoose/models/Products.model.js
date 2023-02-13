const mongoose = require('mongoose')
const { model } = mongoose
const schemas = require('../schemas')

const { ProductsSchema } = schemas

module.exports = model(ProductsSchema.options.collection, ProductsSchema)
