const express = require('express')
const router = express.Router()
const controller = require('../controllers/digitalMarketingController')

router.get('/', controller.getAllDigitalMarketingData)
router.get('/:id', controller.getDigitalMarketingData)
router.post('/post', controller.createDigitalMarketingData)
router.put('/put/:id', controller.updateDigitalMarketingData)
router.delete('/delete/:id', controller.deleteDigitalMarketingData)

module.exports = router