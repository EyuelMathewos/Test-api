const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
     type: String,
     
    },
    dateOfBirth: {
        type: String,
        
       },
    gender: {
     type: String,
     
    },
    salary: {
     type: String,
     
    }
   })
   //Creating the collection Address
   const employee = mongoose.model('employee', employeeSchema)
   module.exports = employee;