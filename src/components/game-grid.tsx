import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/use-games";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";
import { Genre } from "../hooks/use-genres";
import { Platform } from "../hooks/use-platforms";

interface Props {
  genre?: Genre;
  platform?: Platform;
}

export function GameGrid({ genre, platform }: Props) {
  const { data, error, isLoading } = useGames(genre, platform);
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
        spacing={3}
      >
        {isLoading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
        {!isLoading &&
          data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
}
