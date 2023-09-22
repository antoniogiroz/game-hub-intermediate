import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/use-games";
import { PlatformIconList } from "./platform-icon-list";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
