const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true})

adminSchema.pre('save', async function save(next){
    const admin = this
    const SALT_WORK_FACTOR = 10

    if(!admin.isModified('password')) return next()
    try{
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
        admin.password = await bcrypt.hash(admin.password, salt)
        return next()
    } catch(err){
        return next(err)
    }
})

adminSchema.methods.validatePassword = async (password) => {
    const admin = this
    return bcrypt.compare(password, admin.password)
}


const adminModel = mongoose.model('Admin', adminSchema)

module.exports = adminModel