const express = require('express')
const router = express.Router()
const controller = require('../controllers/workerPayController')

router.get('/', controller.getAllWorkerPayData)
router.get('/:id', controller.getWorkerPayData)
router.post('/post', controller.createWorkerPayData)
router.put('/put/:id', controller.updateWorkerPayData)
router.delete('/delete/:id', controller.deleteWorkerPayData)

module.exports = router