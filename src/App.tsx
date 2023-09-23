import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";
import { useState } from "react";
import { Genre } from "./hooks/use-genres";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | undefined>();

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
            <GenreList onSelect={setSelectedGenre} />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid genre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}
