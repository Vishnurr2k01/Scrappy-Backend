
const express = require('express');
require('dotenv').config();

const app = express();

const connectDB = require('./db/connect')
//routes

// app.use('/api/')


//port

const port = process.env.PORT || 3000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();