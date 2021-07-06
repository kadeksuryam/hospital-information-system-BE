const appointmentsRouter = require('express').Router()
const Appointment = require('../models/appointment')
const patientModel = require('../models/patient')
const PatientAppointment = require('../models/patientAppointment')
const { authUser, authAdmin } = require('../utils/middleware')

//CREATE AN APPOINTMENT
appointmentsRouter.post('/', [authUser, authAdmin], async (req, res, next) => {
    const { doctorID, appointmentName, maxAppointment, desc  } = req.body

    try{
        const appointment = new Appointment({
            doctorID, appointmentName, cntAppointment : 0,  maxAppointment, desc 
        })
        
        const savedAppointment = await appointment.save()

        res.status(201).json(savedAppointment)

    } catch(err){
        next(err)
    }

})

//GET/READ AN APPOINTMENT for One Doctors
appointmentsRouter.get('/', [authUser], async (req, res, next) => {
    try{
        const { doctorID } = req.query
        
        const isAdmin = (req.userType === 'admin')

        let appointments = []
        
        if(!isAdmin) appointments = await Appointment.find({ doctorID }, { patients: 0 }).exec()
        else appointments = await Appointment.find({ doctorID }).exec()
        res.status(201).json(appointments)
    } catch(err){
        next(err)
    }
})

appointmentsRouter.get('/:id/patients', [authUser, authAdmin], async (req, res, next) => {
    try{
        const appointmentID = req.params.id

        const patientAppointments = await PatientAppointment.find({appointmentID})

        const patientsId = patientAppointments.map(p => p.patientID)

        
        const patientsData = await patientModel.find({'_id' : {$in : patientsId }}, { password : 0 })

        res.status(200).json(patientsData)
    } catch(err){
        next(err)
    }
})

//UPDATE AN APPOINTMENT
appointmentsRouter.put('/:id', [authUser, authAdmin], async (req, res, next) => {
    try{
        const appointmentID = req.params.id
        const toUpdate = {}
        const { appointmentName, desc, maxAppointment } = req.body
        if(appointmentName) toUpdate["appointmentName"] = appointmentName
        if(maxAppointment) toUpdate["maxAppointment"] = maxAppointment
        if(desc) toUpdate["desc"] = desc

        const currAppointment = await Appointment.findById(appointmentID, toUpdate)
        const newAppointment = await Appointment.findByIdAndUpdate(appointmentID, toUpdate, {new : true})
        res.status(200).json(newAppointment)
    } catch(err){
        next(err)
    }
})

//DELETE AN APPOINTMENT
appointmentsRouter.delete('/:id', [authUser, authAdmin], async (req, res, next) => {
    try{
        const appointmentID = req.params.id
        await Appointment.findByIdAndDelete(appointmentID)

        await PatientAppointment.deleteMany({appointmentID: appointmentID})
        
        res.status(200).json({status: "successfuly delete the appointment" })
    } catch(err){
        next(err)
    }
})

module.exports = appointmentsRouter