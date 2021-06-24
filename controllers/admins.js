const adminsRouter = require('express').Router()
const Admin = require('../models/admin')

//CREATE AN ADMIN
adminsRouter.post('/', async (req, res, next) => {
    const { email, password } = req.body

    try{
        const admin = new Admin({
             email, password
        })
        
        const savedAdmin = await admin.save()

        res.status(201).json(savedAdmin)

    } catch(err){
        if (err.name === 'MongoError' && err.code === 11000) {
            next(new Error('The email address you have entered is already registered.'));
        }
        next(err)
    }

})

module.exports = adminsRouter