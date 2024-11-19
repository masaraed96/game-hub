import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesList from "./components/GamesList";
import GeneresList from "./components/GeneresList";
import { useState } from "react";
import { Genre } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GeneresList
            selectedGenre={selectedGenre}
            setSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GamesList genre={selectedGenre} platform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
