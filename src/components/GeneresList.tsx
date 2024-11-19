import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getOptimizedImage from "../services/image-url";

const GeneresList = () => {
  const { data, error, isLoading } = useGeneres();
  return (
    <List>
      {data.map((genere: Genre) => (
        <ListItem key={genere.id} paddingY="5px">
          <HStack>
            <Image
              src={getOptimizedImage(genere.image_background)}
              boxSize="32px"
              borderRadius="5px"
            />
            <Text fontSize="lg">{genere.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GeneresList;
