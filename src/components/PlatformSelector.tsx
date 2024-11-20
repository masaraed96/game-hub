import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useData from "../hooks/useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  setSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useData<Platform>(
    "/platforms/lists/parents"
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? "Platform: " + selectedPlatform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
