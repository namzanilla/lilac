const router = require('koa-router')()

const c = require('../controllers/languages.controller')

router.get('/languages', c.getList)

module.exports = router
