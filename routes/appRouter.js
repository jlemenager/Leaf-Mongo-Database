const express = require('express')
const router = express.Router()

const BusinessRouter = require('./businessRoute')
const DigitalMarketingRouter = require('./digitalMarketingRoute')
const SpendingRouter = require('./spendingRoute')
const GHGAssessmentRouter = require('./ghgAssessmentRoute')
const WorkerPayRouter = require('./workerPayRoute')

router.get('/', (req,res)=> res.send('This is the main api page'))
router.use('/business', BusinessRouter)
router.use('/digital-marketing', DigitalMarketingRouter)
router.use('/spending', SpendingRouter)
router.use('/ghg-assessment', GHGAssessmentRouter)
router.use('/worker-pay', WorkerPayRouter)

module.exports = router