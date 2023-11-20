const { WorkerPayData } = require('../models')

const getAllWorkerPayData = async(req,res) => {
    try {
        const workerPayData = await WorkerPayData.find().populate('category','name')
        return res.status(200).json({ workerPayData })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getWorkerPayData = async(req,res) => {
    try {
        const { id } = req.params
        const workerPayData = await WorkerPayData.findById(id)
        if (workerPayData){
            return res.status(200).json({ workerPayData })
        } else {
            return res.status(400).send('Worker Pay Data not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createWorkerPayData = async(req, res) => {
    try{
        const workerPayData = new WorkerPayData(req.body)
        await workerPayData.save()
        return res.status(200).json({ workerPayData })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateWorkerPayData = async(req,res) => {
    try{
        const { id } = req.params
        const workerPayData = await WorkerPayData.findByIdAndUpdate(id, req.body, {new:true})
        if (workerPayData){
            res.status(200).json({ workerPayData })
        } else {
            res.status(400).send("Worker Pay Data doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteWorkerPayData = async(req,res) => {
    try{
        const { id } = req.params
        const workerPayData = await WorkerPayData.findByIdAndDelete(id, req.body, {new:true})
        if(workerPayData){
            return res.status(200).json({ workerPayData })
        } else {
            return res.status(400).send("Worker Pay Data doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllWorkerPayData,
    getWorkerPayData,
    createWorkerPayData,
    updateWorkerPayData,
    deleteWorkerPayData
}