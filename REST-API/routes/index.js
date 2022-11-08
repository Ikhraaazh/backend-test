const router = require('express').Router()
const userRoutes = require('./userRoutes')
const quoteRoutes = require('./quoteRoutes')
const authentication = require('../middlewares/authentication')

router.use(userRoutes)
router.use(authentication)
router.use(quoteRoutes)

module.exports = router