const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const Items=new Schema({
    items:[String],
    photo:String,
    date:String,
    time:String,
    address:String

})
const ItemsSchema=mongoose.model("Items",Items)
module.exports=ItemsSchema