const Koa = require('koa')
const cors = require('@koa/cors')

const { resolve } = require('path')

require('dotenv').config({
  path: resolve(__dirname, '../.env'),
})

require('./mongoose/connection')

const languagesRoutes = require('./routes/languages')

const app = new Koa()

app.use(cors())

// routes
app.use(languagesRoutes.routes())

const PORT = +process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`)
})
