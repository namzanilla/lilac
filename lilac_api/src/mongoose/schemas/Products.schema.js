const mongoose = require('mongoose')

const IMAGE_EXT = {
  jpg: 0,
  png: 1,
  webp: 2,
}
const { Schema } = mongoose
const definition = {
  name_uk: { type: String },
  name_ru: { type: String },

  descr_uk: { type: String },
  descr_ru: { type: String },

  price_uah: { type: Number },

  images: [
    {
      id: {
        type: String,
      },
      ext: {
        type: Number,
        enum: Object.values(IMAGE_EXT),
      },
    },
  ],
}
const options = {
  collection: 'Products',
  timestamps: true,
}

module.exports = new Schema(definition, options)
