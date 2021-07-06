const mongoose = require('mongoose')

const patientAppointmentSchema = new mongoose.Schema({
    patientID : {
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    },
    appointmentID : {
        type: mongoose.Types.ObjectId,
        ref: 'Appointment'
    }
}, {timestamps: true})

patientAppointmentSchema.index({"patientID":1, "appointmentID":1}, {unique: true})

const patientAppointmentModel = mongoose.model('PatientAppointment', patientAppointmentSchema)

module.exports = patientAppointmentModel