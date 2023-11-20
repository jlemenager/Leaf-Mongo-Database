const express = require('express')
const router = express.Router()
const controller = require('../controllers/businessController')

router.get('/', controller.getAllBusinesses)
router.get('/:id', controller.getBusiness)
router.post('/post', controller.createBusiness)
router.put('/put/:id', controller.updateBusiness)
router.delete('/delete/:id', controller.deleteBusiness)

module.exports = router