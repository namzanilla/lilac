const mongoose = require('mongoose')
const { connect } = mongoose
const { connection } = mongoose
const { resolve } = require('path')

require('dotenv').config({
  path: resolve(__dirname, '../../.env'),
})

const {
  MONGO_USERNAME: USERNAME,
  MONGO_PASSWORD: PASSWORD,
  MONGO_DB_NAME: DB_NAME,
} = process.env

let uri = `mongodb://${USERNAME}:${PASSWORD}`
uri += `@127.0.0.1:27017/${DB_NAME}?authSource=admin`

connect(
  uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) console.error(err)
  }
)

connection.once('open', async () => {
  console.log('MongoDB database connection established successfully')
  await connection.db.dropDatabase()

  const { LanguagesModel } = require('./models')

  await LanguagesModel.insertMany([
    {
      code: 'uk',
      name: 'Українська',
    },
    {
      code: 'ru',
      name: 'Русский',
    },
    {
      code: 'en',
      name: 'English',
    },
  ])

  process.exit(0)
})
