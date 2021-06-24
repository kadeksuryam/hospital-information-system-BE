const doctorsRouter = require('express').Router()
const Doctor = require('../models/doctor')

//CREATE A DOCTOR
doctorsRouter.post('/', async (req, res, next) => {
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

module.exports = doctorsRouter