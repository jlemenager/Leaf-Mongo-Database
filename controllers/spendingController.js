const { SpendingData } = require('../models')

const getAllSpendingData = async(req,res) => {
    try {
        const spendingData = await SpendingData.find().populate('category','name')
        return res.status(200).json({ spendingData })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getSpendingData = async(req,res) => {
    try {
        const { id } = req.params
        const spendingData = await SpendingData.findById(id)
        if (spendingData){
            return res.status(200).json({ spendingData })
        } else {
            return res.status(400).send('Spending Data not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createSpendingData = async(req, res) => {
    try{
        const spendingData = new SpendingData(req.body)
        await spendingData.save()
        return res.status(200).json({ spendingData })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateSpendingData = async(req,res) => {
    try{
        const { id } = req.params
        const spendingData = await SpendingData.findByIdAndUpdate(id, req.body, {new:true})
        if (spendingData){
            res.status(200).json({ spendingData })
        } else {
            res.status(400).send("Spending Data doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteSpendingData = async(req,res) => {
    try{
        const { id } = req.params
        const spendingData = await SpendingData.findByIdAndDelete(id, req.body, {new:true})
        if(spendingData){
            return res.status(200).json({ spendingData })
        } else {
            return res.status(400).send("Spending Data doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllSpendingData,
    getSpendingData,
    createSpendingData,
    updateSpendingData,
    deleteSpendingData
}