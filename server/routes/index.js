const { Router } = require('express')

const router  = Router()

router.use('/news', require('./news.router'))
router.use('/comments', require('./comments.router'))
router.use('/categories', require('./caregories.router'))

module.exports = router