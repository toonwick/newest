var express = require('express');
var router = express.Router();
var Employee = require('../model/Employee');

router.get('/', (req, res, next) {
  Employee.find({}, (err, response) => {
    if (err) 
      res.status(500).json({message: {
        msgBody: "Unable to get employees",
        msgError: true
      }});
    else {
      res.status(200).json({response});
    }
  });
});

router.post('/', (res, res, next) => {
  const employee = new Employee(req.body);
  employee.save((err, document) => {
    if (err) 
      res.status(500).json({ message: {
        msgBody: "Unable to add employee",
        msgError: true
      }});
    else 
      res.status(200).json({ message: {
        msgBody: "Successfully Added Employee",
        msgError: false
      }});
  });
});

router.delete('/:id', (req, res, next) => {
  Employee.findByIdAndDelete(req.params.id, err => {
    if (err)
      res.status(500).json({ message: {
        msgBody: "Unable to Delete Employee",
        msgError: true
      }});
    else 
      res.status(200).json({ message: {
        msgBody: "Successfully Deleted Employee",
        msgError: false
      }});
  });
});

router.put('/:id', (req, res, next) => {
  Employee.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, (err, response) => {
    if (err)
      res.status(500).json({ message: {
        msgBody: "Unable to Update Employee",
        msgError: true
      }});
    else 
      res.status(200).json({ message: {
        msgBody: "Successfully Update Employee",
        msgError: false
      }});
  });
});

module.exports = employeesRouter;