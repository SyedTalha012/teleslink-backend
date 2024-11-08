const mongoose = require("mongoose")



const accountSchema = mongoose.Schema({
    
    role:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    npi:{type:String,required:true},
    affilation:{type:String,required:true},

    phone:{type:Number,required:true},
    clinicAddress:{type:String,required:true},

    daysAvailable:{type:Array,required:true},
    startTime:{type:String,required:true},
    endTime:{type:String,required:true},


    otp: {type: Number,default: null},
    otpValidTill: {type: Date,default: null},
    otpVerified: {type: Boolean,default: false},

})



const PhysicianAccount = mongoose.model('PhysicianAccount',accountSchema,'PhysicianAccount')

module.exports = PhysicianAccount