const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout
        .find({})
        .sort({ createdAt: -1 })

    res.status(200).json(workouts);
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    const workout = await Workout
        .findById(id)

    res.status(200).json(workout)
}

// create a workout
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

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    const workout = await Workout.findOneAndDelete({ _id: id })

    //check if workout exists
    if (!workout) {
        return res.status(400).json({ error: ' No such workout exists...'})
    }

    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
 
    const workout = await Workout.findOneAndUpdate( { _id: id }, {
        ...req.body
    })

    res.status(200).json(workout)
}
module.exports = { 
    getWorkouts, 
    getWorkout, 
    createWorkout,
    deleteWorkout,
    updateWorkout
}