const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://ASAP:bhuvi19@asap1.qjvod.mongodb.net/")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})