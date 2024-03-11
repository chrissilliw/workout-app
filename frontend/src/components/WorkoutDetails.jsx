import React from "react";

const WorkoutDetails = ({ workout }) => {
  return (
    <>
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>Load: {workout.load}</p>
        <p>Reps: {workout.reps}</p>
      </div>
    </>
  );
};

export default WorkoutDetails;
