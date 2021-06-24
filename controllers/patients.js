const patientsRouter = require('express').Router()
const Patient = require('../models/patient')

//CREATE A PATIENT
patientsRouter.post('/', async (req, res, next) => {
    const { firstName, lastName, age, email, password } = req.body

    try{
        const patient = new Patient({
            firstName, lastName, age, email, password
        })
        
        const savedPatient = await patient.save()

        res.status(201).json(savedPatient)

    } catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            next(new Error('The email address you have entered is already registered.'));
        }
        next(err)
    }

})

module.exports = patientsRouter