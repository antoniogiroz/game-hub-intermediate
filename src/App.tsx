import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";
import { useState } from "react";
import { Genre } from "./hooks/use-genres";
import { PlatformSelector } from "./components/platform-selector";
import { Platform } from "./hooks/use-platforms";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();
  const [selectedPlatform, setSelectedPlatform] = useState<
    Platform | undefined
  >();

  return (
    <>
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
          <GridItem area="aside" padding="10px">
            <GenreList
              selectedGenre={selectedGenre}
              onSelect={setSelectedGenre}
            />
          </GridItem>
        </Show>

        <GridItem area="main" padding="10px">
          <HStack marginBottom={4}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelect={setSelectedPlatform}
            />
          </HStack>
          <GameGrid genre={selectedGenre} platform={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  );
}
