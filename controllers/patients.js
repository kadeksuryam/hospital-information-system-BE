const patientsRouter = require('express').Router()
const Patient = require('../models/patient')
const middleware = require('../utils/middleware')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

//CREATE A PATIENT
patientsRouter.post('/', async (req, res, next) => {
    const { firstName, lastName, age, email, password } = req.body

    try{
        const patient = new Patient({
            firstName, lastName, age, email, password
        })
        
        const savedPatient = await patient.save()

        console.log(savedPatient)

        const userForToken = {userID: savedPatient._id, userType: savedPatient.type}

        //token will expire in next 1 hour
        const token = jwt.sign(userForToken, config.JWT_SECRET, { expiresIn: 60*60 })

        return res.status(200).send({token, authUserID: userForToken.userID, userType : 'patient'})

    } catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            next(new Error('The email address you have entered is already registered.'));
        }
        next(err)
    }

})

//READ Patients

module.exports = patientsRouter