import { Heading } from "@chakra-ui/react";
import { useGenre } from "../hooks/use-genre";
import { usePlatform } from "../hooks/use-platform";
import useGameFilterStore from "../store/game.store";

export function GameHeading() {
  const selectedGenreId = useGameFilterStore((s) => s.gameFilter.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameFilterStore((s) => s.gameFilter.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
}
