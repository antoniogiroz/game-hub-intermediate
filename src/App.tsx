import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/genre-list";
import { NavBar } from "./components/nav-bar";
import { PlatformSelector } from "./components/platform-selector";
import { GameFilter } from "./hooks/use-games";
import { SortSelector } from "./components/sort-selector";
import { GameHeading } from "./components/game-heading";

export default function App() {
  const [filter, setFilter] = useState<GameFilter>({});

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
          <NavBar
            onSearch={(searchText) => setFilter({ ...filter, searchText })}
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding="10px">
            <GenreList
              selectedGenreId={filter.genreId}
              onSelect={(genre) => setFilter({ ...filter, genreId: genre.id })}
            />
          </GridItem>
        </Show>

        <GridItem area="main" padding="10px">
          <Box marginBottom={4}>
            <GameHeading filter={filter} />
          </Box>

          <HStack marginBottom={4} spacing={4}>
            <PlatformSelector
              selectedPlatformId={filter.platformId}
              onSelect={(platform) =>
                setFilter({ ...filter, platformId: platform.id })
              }
            />
            <SortSelector
              selectedSortOrder={filter.sortOrder}
              onSelect={(sortOrder) => setFilter({ ...filter, sortOrder })}
            />
          </HStack>
          <GameGrid filter={filter} />
        </GridItem>
      </Grid>
    </>
  );
}
