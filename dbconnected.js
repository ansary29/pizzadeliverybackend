const mongoose = require("mongoose");

const mongoURL="your url";

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlparser:true});

var db = mongoose.connection   

db.on('connected', () => {
    console.log('Mongo DB connected successfull')
})

db.on('error', () =>{   
    console.log(`Mongo DB connection failed`)  
}) 

module.exports=mongoose
