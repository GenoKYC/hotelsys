const mongoose =  require("mongoose");

var mongoURL = 'mongodb+srv://kylemarave5:13006@cluster0.1ns0n.mongodb.net/hotel-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Succesful')
})

module.exports = mongoose