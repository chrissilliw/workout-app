
const express = require('express');
const { getWorkouts, createWorkout, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.json({ mssg: "Home" });
//  });

router.get('/', getWorkouts);

router.post('/', createWorkout);

router.get('/:id', getWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

 module.exports = router