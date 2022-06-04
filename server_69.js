// CommonJS

//const express = require('express')

// ES6
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';

import morgan from 'morgan';

// cors
import cors from 'cors';

// DB and AuthenticateUser
import connectDB_69 from './db/connect_69.js';

// Routes
import authRoutes_69 from './routes/authRoutes_69.js'
import loginRoutes_69 from './routes/authRoutes_69.js'
import updateRoutes_69 from './routes/authRoutes_69.js'
// Midleware
import notFoundMiddleware_69 from './middleware/not-fount_69.js';
import errorHandlerMiddleware_69 from './middleware/error-handler_69.js';

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    // throw new Error('testing for error')
    // res.send('Welcome YanboLin 209410769')
    res.json({ msg: 'Welcome -- YanboLin 209410769' });
});

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'API V1 -- YanboLin 209410769' });
});

// auth
app.use('/api/v1/auth_69', authRoutes_69);
// login
app.use('/api/v1/auth_69', loginRoutes_69);
//update
app.use('/api/v1/auth_69', updateRoutes_69);

app.use(notFoundMiddleware_69);
app.use(errorHandlerMiddleware_69);

const port = process.env.PORT || 5001;


// Connect to MongoDB LOCAL
const start = async () => {
    try {
        await connectDB_69(process.env.MONGO_LOCAL_URL).then(() => {
            console.log('Connect to MongoDB Local Success')
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (err) {
        console.log(err)
    }
}


// connect to MongoDB ATLAS
// const start = async () => {
//     try {
//         await connectDB_69(process.env.MONGO_URL).then(() => {
//             console.log('Connect to MongoDB Atlas Success')
//         });
//         app.listen(port, () => console.log(`Server is running on port ${port}`));
//     } catch (err) {
//         console.log(err)
//     }
// }

start();
