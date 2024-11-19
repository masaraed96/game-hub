import {
  Card,
  CardBody,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody height="70px">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
