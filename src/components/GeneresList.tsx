import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getOptimizedImage from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre) => void;
}
const GeneresList = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGeneres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre: Genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getOptimizedImage(genre.image_background)}
              boxSize="32px"
              borderRadius="5px"
            />
            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GeneresList;
