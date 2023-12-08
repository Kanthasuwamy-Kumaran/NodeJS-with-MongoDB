const express = require('express');
const router = express.Router()
module.exports = router;

//this code link the model file
const Model = require('../model/employeeModel');

//post name and age
router.post('/employeepost', async (req, res) => { 
    const data = new Model({
        
        EmployeeName: req.body.EmployeeName,
        Department:req.body.Department,
        Destination:req.body.Destination,
        Salary:req.body.Salary
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

