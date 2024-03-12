import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkoutGrid from "./components/WorkoutGrid";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main aside"`,
          md: `"nav nav" "main aside"`,
        }}
      >
        <GridItem colSpan={4} area="nav">
          <Navbar />
        </GridItem>
        <GridItem colSpan={3} area="main" padding={4}>
          <WorkoutGrid />
        </GridItem>
        <Show above="lg">
          <GridItem colSpan={1} area="aside" padding={4}>
            <WorkoutForm />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
