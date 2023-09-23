import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/use-games";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";

export function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
