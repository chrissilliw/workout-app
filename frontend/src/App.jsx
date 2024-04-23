import { Container, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkoutGrid from "./components/WorkoutGrid";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  return (
    <>
      <Container maxW="container.xl">
        <Navbar />
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify="center"
          py={8}
          gap={{ base: "10px", md: "40px", lg: "70px" }}
        >
          <WorkoutGrid order={{ base: 2, md: 1 }} />
          <WorkoutForm order={{ base: 1, md: 2 }} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
