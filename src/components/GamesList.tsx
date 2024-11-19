import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesList = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text className="text-danger">{error}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesList;
