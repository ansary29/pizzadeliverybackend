const mongoose = require("mongoose");

const mongoURL="mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/pizzadelivery";

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlparser:true});

var db = mongoose.connection   

db.on('connected', () => {
    console.log('Mongo DB connected successfull')
})

db.on('error', () =>{   
    console.log(`Mongo DB connection failed`)  
}) 

module.exports=mongoose