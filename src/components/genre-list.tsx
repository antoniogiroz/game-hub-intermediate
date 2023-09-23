import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/use-genres";
import getCroppedImageUrl from "../services/image-url";

export function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading && <li>Loading...</li>}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
