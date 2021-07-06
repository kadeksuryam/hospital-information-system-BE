const patientAppointmentsRouter = require('express').Router()
const PatientAppointment = require('../models/patientAppointment')
const Appointment = require('../models/appointment')
const { authUser, authAdmin } = require('../utils/middleware')


//GET USER APPOINTMENTS
patientAppointmentsRouter.get('/', [authUser], async (req, res, next) => {
    const { patientID, appointmentID } = req.query

    try{
        let patientAppointments = []
        if(req.userType !== "admin"){
            if(patientID !== req.authUserID) return res.status(403).json({error : 'forbidden user'})
            patientAppointments = await PatientAppointment.find({ patientID }).exec()
        }
        else{
            let query = {}
            if(patientID) query.patientID = patientID
            if(appointmentID) query.appointmentID = appointmentID

            patientAppointments = await PatientAppointment.find(query).exec()
        }
        res.json(patientAppointments)
    }
    catch(err){
        next(err)
    }
})


//APPLY AN APPOINTMENT
patientAppointmentsRouter.post('/', [authUser], async (req, res, next) => {
    const { patientID, appointmentID } = req.body

    try{
        const patientAppointment = new PatientAppointment({
            patientID, appointmentID
        })
        
        // increase appointment counter
        const chosenAppointment = await Appointment.findById(appointmentID)
        
        if(chosenAppointment.cntAppointment+1 > chosenAppointment.maxAppointment){
            return next(new Error("Max appointment is exceeded"))
        }

        // save patient appointment
        const savedPatientAppointment = await patientAppointment.save()
        await Appointment.updateOne({_id: appointmentID}, {$inc : {cntAppointment : 1}})

        res.status(201).json(savedPatientAppointment)

    } catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            next(new Error('You have already applied for this appointment'));
        }
        next(err)
    }

})

//CANCEL AN APPOINTMENT
patientAppointmentsRouter.delete('/', [authUser], async (req, res, next) => {
    const { appointmentID } = req.query

    try{
        // decrease appointment counter
        const chosenAppointment = await Appointment.findById(appointmentID)
        
        if(chosenAppointment.cntAppointment-1 < 0){
            return next(new Error("invalid number of appointment"))
        }

        // delete patient appointment
        await PatientAppointment.findOneAndDelete({"appointmentID" : appointmentID})
        await Appointment.updateOne({_id: appointmentID}, {$inc : {cntAppointment : -1}})

        res.status(200).json({status: "successfully cancel the appointment"})

    } catch(err){
        next(err)
    }

})

module.exports = patientAppointmentsRouter