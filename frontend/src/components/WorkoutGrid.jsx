import useWorkouts from "../hooks/useWorkouts";
import WorkoutDetails from "./WorkoutDetails";
import { SimpleGrid } from "@chakra-ui/react";
const WorkoutGrid = () => {
  const { workouts, error } = useWorkouts();
  return (
    <>
      <div className="workouts">
        <SimpleGrid spacing={4}>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </SimpleGrid>
      </div>
    </>
  );
};

export default WorkoutGrid;
