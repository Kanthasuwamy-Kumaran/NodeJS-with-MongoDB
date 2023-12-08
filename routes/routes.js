
/*Import Dependencies:
The code imports Express and creates a router using express.
Router(). It also imports the 'Model' defined earlier,
 which is the Mongoose model for handling data.*/
const express = require('express');
const router = express.Router()
module.exports = router;

const Model = require('../model/model');

//post name and age
/*POST Method - Create Data:
This route handles HTTP POST requests to '/api/post'. 
It creates a new instance of the 'Model' with the data from the request body, 
then attempts to save it to the database. If successful, it responds with the saved data; 
otherwise, it returns an error message.*/
router.post('/post', async (req, res) => { 
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})




//GetAll
/*GET Method - Get All Data:
This route handles HTTP GET requests to '/api/getAll'. 
It retrieves all data from the database using Model.find() 
and responds with the retrieved data. If an error occurs, 
it returns a 500 internal server error.*/
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
/*GET Method - Get Data by ID:
This route handles HTTP GET requests to '/api/getOne/:id', 
where ':id' is a parameter representing the document's ID. 
It retrieves a specific document by ID using Model.findById() 
and responds with the retrieved data. If an error occurs, 
it returns a 500 internal server error.*/
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
/*PUT Method - Update Data by ID:
This route handles HTTP PUT requests to '/api/update/:id', 
where ':id' is a parameter representing the document's ID. 
It updates a specific document by ID using Model.findByIdAndUpdate()
 and responds with the updated data. If an error occurs, it returns a 400 
 bad request error.*/
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
/*DELETE Method - Delete Data by ID:
This route handles HTTP DELETE requests to '/api/delete/:id', 
where ':id' is a parameter representing the document's ID. 
It deletes a specific document by ID using Model.findByIdAndDelete() 
and responds with a message indicating which document has been deleted.
 If an error occurs, it returns a 400 bad request error.*/
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})