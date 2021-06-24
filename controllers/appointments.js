const appointmentsRouter = require('express').Router()
const Appointment = require('../models/appointment')

//CREATE AN APPOINTMENT
appointmentsRouter.post('/', async (req, res, next) => {
    const { doctorID, patients, desc  } = req.body

    try{
        const appointment = new Appointment({
            doctorID, patients, desc 
        })
        
        const savedAppointment = await appointment.save()

        res.status(201).json(savedAppointment)

    } catch(err){
        next(err)
    }

})

module.exports = appointmentsRouter