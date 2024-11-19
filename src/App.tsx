import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesList from "./components/GamesList";
import GeneresList from "./components/GeneresList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GeneresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesList />
      </GridItem>
    </Grid>
  );
}

export default App;
