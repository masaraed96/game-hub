import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import getOptimizedImage from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image height="300px" src={getOptimizedImage(game.background_image)} />
      <CardBody height="70px">
        <HStack justifyContent="space-between">
          <PlatformListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack paddingTop={2} alignItems="center">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
