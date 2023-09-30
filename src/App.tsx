import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/game-grid";
import { GameHeading } from "./components/game-heading";
import { GenreList } from "./components/genre-list";
import { NavBar } from "./components/nav-bar";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";

export default function App() {
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
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" padding="10px">
          <Box marginBottom={4}>
            <GameHeading />
          </Box>

          <HStack marginBottom={4} spacing={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
