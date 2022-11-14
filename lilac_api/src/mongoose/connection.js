const mongoose = require('mongoose')
const { connect } = mongoose
const { connection } = mongoose

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

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
