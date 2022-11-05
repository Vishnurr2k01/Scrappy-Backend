const mongoose = require('mongoose')
 
const Municipality = new mongoose.Schema({
   
    title : {
        type : String,
    },
    photo : {
        type : String,
    },
    date: {
        type : String,
    },
    location : {
        type : String,
    },
    status : {
        type : Boolean,
        default : false
    },
    accepted:{
        type : Boolean,
        default : false
    },
    resolved : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Municipality', Municipality)