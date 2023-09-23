import { Heading } from "@chakra-ui/react";
import { GameFilter } from "../hooks/use-games";

interface Props {
  filter: GameFilter;
}

export function GameHeading({ filter }: Props) {
  const heading = `${filter.platform?.name || ""} ${
    filter.genre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
}
