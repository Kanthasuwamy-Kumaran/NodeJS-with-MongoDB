

// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

//function
database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());


//server 
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


//Post Method
// routes.post('/post', (req, res) => {
//     res.send('Post API')
// })


const routes = require('./routes/routes');
// const routes = require('./routes/employeeRoutes');

app.use('/api', routes)
