const doctorsRouter = require('express').Router()
const Doctor = require('../models/doctor')
const { authUser, authAdmin } = require('../utils/middleware')

//CREATE A DOCTOR
doctorsRouter.post('/', [authUser, authAdmin], async (req, res, next) => {
    const { name, desc } = req.body

    try{
        const doctor = new Doctor({
            name, desc
        })
        
        const savedDoctor = await doctor.save()

        res.status(201).json(savedDoctor)

    } catch(err){
        next(err)
    }

})

//GET/READ ALL DOCTOR
doctorsRouter.get('/', async (req, res, next) => {
    try{
        const doctors = await Doctor.find({})

        return res.status(200).json(doctors)
    } catch(err){
        next(err)
    }
})

//GET/READ ONE DOCTOR
doctorsRouter.get('/:id', async (req, res, next) => {
    try{
        const doctorID = req.params.id
        const doctor = await Doctor.findById(doctorID)

        return res.status(200).json(doctor)
        
    } catch(err){
        next(err)
    }
})

module.exports = doctorsRouter