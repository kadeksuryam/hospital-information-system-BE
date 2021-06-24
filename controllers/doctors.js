const doctorsRouter = require('express').Router()
const Patient = require('../models/patient')

//CREATE A DOCTOR
doctorsRouter.post('/', async (req, res, next) => {
    const { name, desc } = req.body

    try{
        const doctor = new Patient({
            name, desc
        })
        
        const savedDoctor = await doctor.save()

        res.status(201).json(savedDoctor)

    } catch(err){
        next(err)
    }

})

module.exports = doctorsRouter