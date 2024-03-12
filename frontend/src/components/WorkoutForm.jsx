import { useState } from "react";
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
// import { object, string, number, date, InferType } from "yup";
import { object, string, number } from "yup";
import LOCALHOST_URI from "../utils/const";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      load: "",
      reps: "",
      sets: "",
    },
    validationSchema: object({
      title: string().required("Title required").min(3, "Title is to short"),
      load: number().required("load is required").positive().integer(),
      reps: number().required("reps is required").positive().integer(),
      sets: number().required("set is required").positive().integer(),
    }),
    onSubmit: async (values, actions) => {
      //   alert(JSON.stringify(values, null, 2));
      //   const workout = { title, load, reps, sets };

      //   const workout = JSON.stringify(values, null, 2);
      //   alert(workout);
      const response = await fetch(`${LOCALHOST_URI}/api/workouts`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        console.error("Error adding workout: ", json);
        setError(json);
      }

      if (response.ok) {
        console.log("new workout added", json);
        actions.resetForm();
        dispatch({ type: "CREATE_WORKOUT", payload: json });
      }
    },
  });
  return (
    <>
      <VStack as="form" onSubmit={formik.handleSubmit}>
        <Heading>Add new Workout</Heading>
        <FormControl isInvalid={formik.errors.title} paddingBottom={4}>
          <FormLabel>Exercise: </FormLabel>
          <Input
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
          />
          <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.load} paddingBottom={4}>
          <FormLabel>Load(kg): </FormLabel>
          <Input
            type="number"
            onChange={formik.handleChange}
            value={formik.values.load}
            name="load"
          />
          <FormErrorMessage>{formik.errors.load}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.reps} paddingBottom={4}>
          <FormLabel>Reps:</FormLabel>
          <Input
            type="number"
            onChange={formik.handleChange}
            value={formik.values.reps}
            name="reps"
          />
          <FormErrorMessage>{formik.errors.reps}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.sets} paddingBottom={4}>
          <FormLabel>Set:</FormLabel>
          <Input
            type="number"
            onChange={formik.handleChange}
            value={formik.values.sets}
            name="sets"
          />
          <FormErrorMessage>{formik.errors.sets}</FormErrorMessage>
        </FormControl>
        <Button type="submit" size="md">
          Add Workout
        </Button>
      </VStack>
    </>
  );
};

export default WorkoutForm;
