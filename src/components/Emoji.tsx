import Bullseye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "23px" },
    5: { src: Bullseye, alt: "Exceptional", boxSize: "30px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
