const { GHGAssessmentData } = require('../models')

const getAllGHGAssessmentData = async(req,res) => {
    try {
        const ghgAssessmentData = await GHGAssessmentData.find().populate('category','name')
        return res.status(200).json({ ghgAssessmentData })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getGHGAssessmentData = async(req,res) => {
    try {
        const { id } = req.params
        const ghgAssessmentData = await GHGAssessmentData.findById(id)
        if (ghgAssessmentData){
            return res.status(200).json({ ghgAssessmentData })
        } else {
            return res.status(400).send('GHG Assessment Data not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createGHGAssessmentData = async(req, res) => {
    try{
        const ghgAssessmentData = new GHGAssessmentData(req.body)
        await ghgAssessmentData.save()
        return res.status(200).json({ ghgAssessmentData })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateGHGAssessmentData = async(req,res) => {
    try{
        const { id } = req.params
        const ghgAssessmentData = await GHGAssessmentData.findByIdAndUpdate(id, req.body, {new:true})
        if (ghgAssessmentData){
            res.status(200).json({ ghgAssessmentData })
        } else {
            res.status(400).send("GHG Assessment Data doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteGHGAssessmentData = async(req,res) => {
    try{
        const { id } = req.params
        const ghgAssessmentData = await GHGAssessmentData.findByIdAndDelete(id, req.body, {new:true})
        if(ghgAssessmentData){
            return res.status(200).json({ ghgAssessmentData })
        } else {
            return res.status(400).send("GHG Assessment Data doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllGHGAssessmentData,
    getGHGAssessmentData,
    createGHGAssessmentData,
    updateGHGAssessmentData,
    deleteGHGAssessmentData
}