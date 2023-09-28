import { Heading } from "@chakra-ui/react";
import { GameFilter } from "../hooks/use-games";
import { useGenre } from "../hooks/use-genre";
import { usePlatform } from "../hooks/use-platform";

interface Props {
  filter: GameFilter;
}

export function GameHeading({ filter }: Props) {
  const selectedGenre = useGenre(filter.genreId);
  const selectedPlatform = usePlatform(filter.platformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
}
