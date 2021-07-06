const logger = require('./logger')
const jwt = require('jsonwebtoken')
const config = require('./config')

const requestLogger = (req, res, next) => {
    logger.info('Method: ', req.method)
    logger.info('Path: ', req.path)
    logger.info('---')
    next()
}

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization')
    let token = null

    if(authorization){
        if(authorization.toLowerCase().startsWith('bearer ')){
            token = authorization.substring(7)
        }
    }

    req.token = token
    next()
}

const authUser = async (req, res, next) => {
    if(!req.token) return res.status(401).json({ error: 'token missing' })

    try{
        const decodedToken = jwt.verify(req.token, config.JWT_SECRET)

        if(!decodedToken.userID) return res.status(401).json({ error: 'token invalid' })

        req.authUserID = decodedToken.userID
        req.userType = decodedToken.userType
         
        next()
    } catch(err){
        next(err)
    }
}

const authAdmin = async (req, res, next) => {
    if(req.userType !== 'admin') return res.status(403).json({ error : 'forbidden' })
    next()
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (err, req, res, next) => {
    logger.info(err.name)
    if(err.name === "TokenExpiredError"){
        return res.status(401).send({error : "JWT Token has expired" })
    }
    return res.status(400).send({error : err.message})
}

module.exports = {
    requestLogger,
    tokenExtractor,
    authUser,
    authAdmin,
    unknownEndpoint,
    errorHandler
}