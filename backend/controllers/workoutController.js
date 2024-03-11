const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout
        .find({})
        .sort({ createdAt: -1 })

    res.status(200).json(workouts);
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    // Check if Id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout exists..."})
    }

    // Find workout
    const workout = await Workout
        .findById(id)

    // Check if workout exists
    if(!workout) {
        return res.status(400).json({ error: "No such workout exists..."})
    }

    // Return status code and workout
    res.status(200).json(workout)
}

// Create a workout
const createWorkout = async (req, res) => {
    const {title, reps, load, sets }  = req.body

    try {
        const workout = await Workout.create({
            title: req.body.title,
            reps: req.body.reps,
            load: req.body.load,
            sets: req.body.sets,
        })
        res.status(200).json(workout)
        const savedWorkout = await workout.save();
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}

// Delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    // Check if Id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout exists..."})
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    // Check if workout exists
    if (!workout) {
        return res.status(400).json({ error: ' No such workout exists...'})
    }

    res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    // Check if Id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout exists..."})
    }
 
    const workout = await Workout.findOneAndUpdate( { _id: id }, {
        ...req.body
    })

    // Check if workout exists
    if(!workout) {
        return res.status(400).json({ error: 'No such workout exists...'})
    }

    res.status(200).json(workout)
}
module.exports = { 
    getWorkouts, 
    getWorkout, 
    createWorkout,
    deleteWorkout,
    updateWorkout
}