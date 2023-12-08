

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })



/*Load Environment Variables:
This line imports and configures the 'dotenv' module, which is commonly used to 
load environment variables from a .env file into the process.env object.*/
require('dotenv').config();

/*Import Dependencies
Here, the code imports the Express.js 
framework and the Mongoose library for MongoDB.*/
const express = require('express');
const mongoose = require('mongoose');

/*Database Connection:
It establishes a connection to the MongoDB database 
using the connection string from the environment variable DATABASE_URL.*/
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

/*Database Event Handling:
These lines handle events related to the database connection. 
If there's an error, it's logged. 
Once the connection is successful, it logs a message.*/
database.on('error', (error) => {
    console.log(error)
})

//function
database.once('connected', () => {
    console.log('Database Connected');
})

/*Create Express App
An Express app is created, and
it's configured to parse JSON in the request body using express.json().*/
const app = express();
app.use(express.json());


/*Start Server:
It starts the Express server on port 3000 and logs 
a message when the server is successfully started.*/
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


//Post Method
// routes.post('/post', (req, res) => {
//     res.send('Post API')
// })



/*Import Routes
It imports the route definitions from the './routes/routes' file. 
Routes are typically used to define the API endpoints and their corresponding handlers.*/
const routes = require('./routes/routes');
//this employee path for routes
// const routes = require('./routes/employeeRoutes');


/*Use Route Middleware
Use Routes:
It tells the Express app to use the routes defined in the 'routes' module 
when requests with the '/api' prefix are received.*/
app.use('/api', routes)
