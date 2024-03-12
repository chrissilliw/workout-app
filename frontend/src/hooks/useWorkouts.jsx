import React, { useState } from "react";
import { useEffect } from "react";
import LOCALHOST_URI from "../utils/const";
import { useWorkoutsContext } from "./useWorkoutsContext";

const useWorkouts = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();

  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${LOCALHOST_URI}/api/workouts`);
        const json = await response.json();

        if (response.ok) {
          // setWorkouts(json);
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        return error.message;
      }
    };

    fetchWorkouts();
  }, []);

  return { workouts };
};

export default useWorkouts;
