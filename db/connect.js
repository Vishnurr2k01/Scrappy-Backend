const mongoose =require('mongoose');

const mongoDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports = mongoDB;