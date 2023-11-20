const express = require('express')
const router = express.Router()
const controller = require('../controllers/ghgAssessmentController')

router.get('/', controller.getAllGHGAssessmentData)
router.get('/:id', controller.getGHGAssessmentData)
router.post('/post', controller.createGHGAssessmentData)
router.put('/put/:id', controller.updateGHGAssessmentData)
router.delete('/delete/:id', controller.deleteGHGAssessmentData)

module.exports = router