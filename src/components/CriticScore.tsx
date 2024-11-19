import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius="4px" fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
