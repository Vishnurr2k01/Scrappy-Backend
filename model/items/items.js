const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const Items=new Schema({
    items:[String],
    photo:String,
    date:String,
    time:String,
    address:String,
    status:{
        type:Boolean,
        default:false
    },
    accepted:{
        type:Boolean,
        default:false
    },
    resolved:{
        type:Boolean,
        default:false
    }

})
const ItemsSchema=mongoose.model("Items",Items)
module.exports=ItemsSchema