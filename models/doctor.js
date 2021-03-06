const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Appointment'
    }]
}, {timestamps: true})


const doctorModel = mongoose.model('Doctor', doctorSchema)

module.exports = doctorModel