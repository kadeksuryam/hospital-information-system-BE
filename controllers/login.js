const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const Patient = require('../models/patient')
const Admin = require('../models/admin')
const config = require('../utils/config')


loginRouter.post('/', async(req, res, next) => {
    const { email, password } = req.body

    try{
        const patient = await Patient.findOne({email: email})
        const admin = await Admin.findOne({email: email})

        let currUser = null

        if(admin){
            currUser = admin
            currUser['type'] = 'admin'
        }
        else if(patient){
            currUser = patient;
            currUser['type'] = 'patient'
        }
        console.log(currUser)
        const passwordCorrect = (currUser === null)
            ? false
            : await bcrypt.compare(password, currUser.password)

        if(!((currUser) && passwordCorrect)){
            return res.status(401).json({
                error: 'invalid email or password'
            })
        }

        const userForToken = {userID: currUser._id, userType: currUser.type}

        //token will expire in next 1 hour
        const token = jwt.sign(userForToken, config.JWT_SECRET, { expiresIn: 60*60 })

        return res.status(200).send({token, authUserID: userForToken.userID, userType : userForToken.userType})

    } catch(err){
        next(err)
    }
})

module.exports = loginRouter