const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const isValidEmail = (email) => {
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return re.test(email)
}

const isValidPassword = (password) => {
    const re = /^[A-Za-z0-9]{6,}$/
    return re.test(password)
}
const patientSchema = new mongoose.Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'First name can\'t be empty']
    },
    lastName:{
        type: String,
        trim: true
    },
    age:{
        type: Number,
        min: [1, 'Please provide valid age'],
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'Please provide an email.'],
        unique: true,
        validate: [isValidEmail, 'Please provide a valid email.']
    },
    password:{
        type: String,
        trim: true,
        required: [true, 'Please provide a password.'],
        validate: [isValidPassword, 'Password should contains at least six characters and contains only letters or numerals.']
    }
}, {timestamps : true})

patientSchema.pre('save', async function save(next){
    const patient = this
    const SALT_WORK_FACTOR = 10

    if(!patient.isModified('password')) return next()
    try{
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
        patient.password = await bcrypt.hash(patient.password, salt)
        return next()
    } catch(err){
        return next(err)
    }
})

patientSchema.methods.validatePassword = async (password) => {
    const patient = this
    return bcrypt.compare(password, patient.password)
}


const patientModel = mongoose.model('Patient', patientSchema)

module.exports = patientModel