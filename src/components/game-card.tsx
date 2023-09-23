import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/use-games";
import { PlatformIconList } from "./platform-icon-list";
import { CriticScore } from "./critic-score";
import getCroppedImageUrl from "../services/image-url";
import { GameCardContainer } from "./game-card-container";

interface Props {
  game: Game;
}

export function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}
