const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const patientsRouter = require('./controllers/patients')
const doctorsRouter = require('./controllers/doctors')
const appointmentsRouter = require('./controllers/appointments')
const adminsRouter = require('./controllers/admins')
const loginRouter = require('./controllers/login')
const patientAppointmentsRouter = require('./controllers/patientAppointments')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
})

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)


//main endpoints
app.use('/api/login', loginRouter)
app.use('/api/patients', patientsRouter)
app.use('/api/doctors', doctorsRouter)
app.use('/api/appointments', appointmentsRouter)
app.use('/api/patient-appointments', patientAppointmentsRouter)
app.use('/api/admins', adminsRouter)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app