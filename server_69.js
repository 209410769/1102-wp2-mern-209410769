// CommonJS

//const express = require('express')

// ES6
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB_69 from './db/connect_69.js';

app.get('/', (req, res) => {
    res.send('Welcome YanboLin 209410769')
});

const port = process.env.PORT || 5001;

const start = async () => {
    try {
        await connectDB_69(process.env.MONGO_LOCAL_URL).then(() => {
            console.log('Connect to MongoDB Success')
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (err) {
        console.log(err)
    }
}

start();
