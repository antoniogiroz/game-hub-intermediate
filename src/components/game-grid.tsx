import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/use-games";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
    </InfiniteScroll>
  );
}
