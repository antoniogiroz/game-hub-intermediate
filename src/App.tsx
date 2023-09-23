import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";

export default function App() {
  return (
    <>
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
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
