import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameFilter, useGames } from "../hooks/use-games";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";
import { Fragment } from "react";

interface Props {
  filter?: GameFilter;
}

export function GameGrid({ filter }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(filter);
  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
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
        {!isLoading &&
          data.pages?.map((page, index) => (
            <Fragment key={index}>
              {page.results?.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </Fragment>
          ))}
      </SimpleGrid>

      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
}
