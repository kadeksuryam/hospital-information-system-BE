const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    doctorID : {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    },
    appointmentName : {
        type: String
    },
    cntAppointment : {
        type : Number,
        min : 0
    },
    maxAppointment : {
        type : Number
    },
    desc: {
        type: String
    }
}, {timestamps: true})


const appointmentModel = mongoose.model('Appointment', appointmentSchema)

module.exports = appointmentModel