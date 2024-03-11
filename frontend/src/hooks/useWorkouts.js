import React, { useState } from "react";
import { useEffect } from "react";
import LOCALHOST_URI from "../utils/const";

const useWorkouts = () => {
    const [workouts, setWorkouts] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchWorkouts = async () => {
        try {
            const response = await fetch(`${LOCALHOST_URI}/api/workouts`);
            const json = await response.json();
      
            if (response.ok) {
                setWorkouts(json);
              }
        } catch (error) {
            return error.message;
        }


      };
  
      fetchWorkouts();
    }, []);

    return { workouts };
}

export default useWorkouts;