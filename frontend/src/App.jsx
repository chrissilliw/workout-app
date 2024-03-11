import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkoutGrid from "./components/WorkoutGrid";

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
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          <WorkoutGrid />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
