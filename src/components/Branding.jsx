import { Image, useColorMode, Box, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../assets/rick-and-morty-logo.png";

export function Branding() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Image
        src={logo}
        alt="Rick And Morty"
        margin={"auto auto"}
        width={"400px"}
      />

      <Box position={"absolute"} right={"10px"} top={"10px"}>
        {colorMode === "light" ? (
          <Button onClick={() => toggleColorMode()}>
            <MoonIcon />{" "}
          </Button>
        ) : (
          <Button onClick={() => toggleColorMode()}>
            <SunIcon />{" "}
          </Button>
        )}
      </Box>
    </>
  );
}
