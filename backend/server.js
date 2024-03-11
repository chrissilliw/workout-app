const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connection');

const app = express();

const workoutRoutes = require('./routes/workoutRoutes');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

connectDB()
    .then( () => {
        app.use('/api/workouts', workoutRoutes);

        const PORT = process.env.PORT || 3000;
        app.listen(process.env.PORT, () => {
            console.log("Listening to port: ", process.env.PORT);
        })
    })
    .catch( (error) => {
        console.error('Error connecting to database: ', error.message);
    })
