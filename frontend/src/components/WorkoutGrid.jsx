import useWorkouts from "../hooks/useWorkouts";
import WorkoutDetails from "./WorkoutDetails";
const WorkoutGrid = () => {
  const { workouts, error } = useWorkouts();
  return (
    <>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </>
  );
};

export default WorkoutGrid;
