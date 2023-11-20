const express = require('express')
const router = express.Router()
const controller = require('../controllers/spendingController')

router.get('/', controller.getAllSpendingData)
router.get('/:id', controller.getSpendingData)
router.post('/post', controller.createSpendingData)
router.put('/put/:id', controller.updateSpendingData)
router.delete('/delete/:id', controller.deleteSpendingData)

module.exports = router