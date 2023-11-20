const db = require('../db')
const { Business,WorkerPayData } = require('../models')

const createWorkerPayData = async() => {
    const homeDepot = await Business.find({ name:'Home Depot' })
    const workerPayData = [
        {
            business : homeDepot[0]._id,
            business_username : homeDepot[1]._id,  
            average_factory_worker_salary_in_thousands_of_dollars: 12,
            average_local_worker_salary_in_thousands_of_dollars: 52,
            average_management_salary_in_thousands_of_dollars: 82
        }
    ]
    await WorkerPayData.insertMany(workerPayData)
    console.log('Added Worker Pay Data')
}

const run = async() => {
    await createWorkerPayData()
    db.close()
}

run()