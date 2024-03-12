import React from "react";
import { Card, Heading, Text, HStack, Stack, Box } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import LOCALHOST_URI from "../utils/const";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      `${LOCALHOST_URI}/api/workouts/${workout._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <Card padding={5} borderRadius={20}>
        <HStack justifyContent="space-between">
          <Box>
            <Box>
              <Text fontSize="md">Workout</Text>
              <Heading as="h4" fontSize="2xl" marginBottom={4}>
                {workout.title}
              </Heading>
            </Box>
            <HStack>
              <Stack>
                <Text fontSize="md">Load</Text>
                <Text>{workout.load}</Text>
              </Stack>
              <Stack>
                <Text fontSize="md">Reps</Text>
                <Text>{workout.reps}</Text>
              </Stack>
              <Stack>
                <Text fontSize="md">Set</Text>
                <Text>{workout.sets}</Text>
              </Stack>
            </HStack>
          </Box>
          <Box
            padding={5}
            bg="lightgrey"
            borderRadius="50%"
            onClick={handleClick}
            cursor="pointer"
          >
            <FaRegTrashCan padding="20px" color="primary" />
          </Box>
        </HStack>
      </Card>
    </>
  );
};

export default WorkoutDetails;
