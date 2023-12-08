//Schema model

/*Import Mongoose:
The code imports the Mongoose library to define a schema 
and create a model for working with MongoDB.*/
const mongoose = require('mongoose');

/*Define Data Schema:
This block of code defines a Mongoose schema for a 'Data' model. 
The schema has two fields: 'name' and 'age'. Both fields are required (required: true). 
The 'name' field is of type String, and the 'age' field is of type Number.*/
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

/*Export Model:
This line exports the Mongoose model. The mongoose.model function takes two arguments: 
the name of the model ('Data' in this case) and the schema (defined earlier). 
This allows you to interact with MongoDB using the defined schema.*/
module.exports = mongoose.model('Data', dataSchema)