var express = require('express')
var router = express.Router()

router.use('/influencers', require('./influencers'))

module.exports = router
