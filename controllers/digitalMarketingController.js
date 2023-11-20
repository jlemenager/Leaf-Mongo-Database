const { DigitalMarketingData } = require('../models')

const getAllDigitalMarketingData = async(req,res) => {
    try {
        const digitalMarketingData = await DigitalMarketingData.find().populate('category','name')
        return res.status(200).json({ digitalMarketingData })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getDigitalMarketingData = async(req,res) => {
    try {
        const { id } = req.params
        const digitalMarketingData = await DigitalMarketingData.findById(id)
        if (digitalMarketingData){
            return res.status(200).json({ digitalMarketingData })
        } else {
            return res.status(400).send('Digital Marketing Data not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createDigitalMarketingData = async(req, res) => {
    try{
        const digitalMarketingData = new DigitalMarketingData(req.body)
        await digitalMarketingData.save()
        return res.status(200).json({ digitalMarketingData })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateDigitalMarketingData = async(req,res) => {
    try{
        const { id } = req.params
        const digitalMarketingData = await DigitalMarketingData.findByIdAndUpdate(id, req.body, {new:true})
        if (digitalMarketingData){
            res.status(200).json({ digitalMarketingData })
        } else {
            res.status(400).send("Digital Marketing Data doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteDigitalMarketingData = async(req,res) => {
    try{
        const { id } = req.params
        const digitalMarketingData = await DigitalMarketingData.findByIdAndDelete(id, req.body, {new:true})
        if(digitalMarketingData){
            return res.status(200).json({ digitalMarketingData })
        } else {
            return res.status(400).send("Digital Marketing Data doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllDigitalMarketingData,
    getDigitalMarketingData,
    createDigitalMarketingData,
    updateDigitalMarketingData,
    deleteDigitalMarketingData
}