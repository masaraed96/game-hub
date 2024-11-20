import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />

      <Text padding="10px" whiteSpace="nowrap">
        {colorMode === "dark" ? "to Light mode" : "to Dark mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
