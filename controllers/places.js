const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET/places')
})
// more code here in a moment

module.exports = router