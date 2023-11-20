const { Business } = require('../models')

const getAllBusinesses = async(req,res) => {
    try {
        const businesses = await Business.find().populate('category','name')
        return res.status(200).json({ businesses })
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getBusiness = async(req,res) => {
    try {
        const { id } = req.params
        const business = await Business.findById(id)
        if (business){
            return res.status(200).json({ business })
        } else {
            return res.status(400).send('Business not found')
        }
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const createBusiness = async(req, res) => {
    try{
        const business = new Business(req.body)
        await business.save()
        return res.status(200).json({ business })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateBusiness = async(req,res) => {
    try{
        const { id } = req.params
        const business = await Business.findByIdAndUpdate(id, req.body, {new:true})
        if (business){
            res.status(200).json({ business })
        } else {
            res.status(400).send("Business doesn't exist")
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteBusiness = async(req,res) => {
    try{
        const { id } = req.params
        const business = await Business.findByIdAndDelete(id, req.body, {new:true})
        if(business){
            return res.status(200).json({ business })
        } else {
            return res.status(400).send("Business doesn't exist")
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllBusinesses,
    getBusiness,
    createBusiness,
    updateBusiness,
    deleteBusiness
}