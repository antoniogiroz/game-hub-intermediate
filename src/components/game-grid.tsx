import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameFilter, useGames } from "../hooks/use-games";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";

interface Props {
  filter?: GameFilter;
}

export function GameGrid({ filter }: Props) {
  const { data, error, isLoading } = useGames(filter);
  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
    >
      {isLoading && skeletons.map((i) => <GameCardSkeleton key={i} />)}
      {!isLoading && data.map((game) => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  );
}
