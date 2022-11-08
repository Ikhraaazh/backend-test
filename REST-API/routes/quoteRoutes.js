const Controller = require('../controllers/quoteController')
const router = require('express').Router()

router.get('/', Controller.quotes)
router.get('/favorites', Controller.favorites)
router.get('/apiQuote', Controller.apiQuote)
router.post('/newQuote', Controller.newQuote)
router.patch('/favorite/:id', Controller.favorite)
router.delete('/delete/:id', Controller.delete)

module.exports = router