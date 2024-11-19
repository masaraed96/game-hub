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
  selectGenre: (genre: Genre) => void;
}
const GeneresList = ({ selectGenre }: Props) => {
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
              variant="link"
              fontSize="lg"
              onClick={() => {
                console.log(genre);
                selectGenre(genre);
              }}
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
