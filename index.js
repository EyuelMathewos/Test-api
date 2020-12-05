const express = require('express');
const trackRoute = express.Router();
//const conn = require('./config/connection');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const model = require('./config/model')

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({extended: false}),
  cors()  
)

app.post('/addemployee', (req, res) => {
  console.log(req.body);
  name = req.body.name,
  dateOfBirth = req.body.dateOfBirth,
  gender = req.body.gender,
  salary = req.body.salary

 let newEmp = new model({
   name: name,
   dateOfBirth: dateOfBirth,
   gender: gender,
   salary: salary
  })
  newEmp.save().then((employee) => {
   res.send(employee)
  }).catch((err) => {
   console.log(err)
  })
 })

 app.get('/getemployee/:id', (req, res) =>{
  model.findById(req.params.id, (err, user) =>{
   res.send(user)
  })
 })

 app.get('/getemployeelist', (req, res) =>{
  model.find((err, userslist) =>{
   res.send(userslist)
   console.log(userslist)
  })
 })

app.post('/updateemployee/:id', (req, res) => {
 let employee = {}
 if (req.body.name) employee.name = req.body.name
 if (req.body.dateOfBirth) employee.dateOfBirth = req.body.dateOfBirth
 if (req.body.gender) employee.gender = req.body.gender
 if (req.body.salary) employee.salary = req.body.salary
 employee = { $set: employee }
model.updateOne({_id: req.params.id}, employee).then(() => {
  res.send(employee)
 }).catch((err) => {
  console.log(err)
 })
})

app.delete('/deleteemployee/:id', (req, res) => {
  model.deleteOne({_id: req.params.id}).then(() => {
   res.send('user deleted')
  }).catch((err) => {
   console.log(err)
  })
 })
 
  

  app.listen(4000, () => {
    console.log("App listening on port 4000!");
  });