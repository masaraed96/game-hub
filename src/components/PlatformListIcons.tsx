import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaAndroid,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";

import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformListIcons = ({ platforms }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    ios: MdPhoneIphone,
    pc: FaWindows,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    nintendo: SiNintendogamecube,
  };
  return (
    <HStack margin={1}>
      {platforms.map((platform) => (
        <Icon color="gray.500" as={IconMap[platform.slug]} key={platform.id} />
      ))}
    </HStack>
  );
};

export default PlatformListIcons;
