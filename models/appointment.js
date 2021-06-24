const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    doctorID : {
        type: mongoose.Types.ObjectId,
        ref: 'Doctor'
    },
    patients: [{
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    }],
    desc: {
        type: String
    }
}, {timestamps: true})


const appointmentModel = mongoose.model('Appointment', appointmentSchema)

module.exports = appointmentModel