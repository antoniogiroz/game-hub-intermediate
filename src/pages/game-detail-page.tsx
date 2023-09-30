import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/expandable-text";
import { useGame } from "../hooks/use-game";
import { GameAttributes } from "../components/game-attributes";

export function GameDetailPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </>
  );
}
