import { Image } from "@chakra-ui/react";
import logo from "../assets/rick-and-morty-logo.png";

export function Branding() {
  return (
    <Image
      src={logo}
      alt="Rick And Morty"
      margin={"auto auto"}
      width={"400px"}
    />
  );
}
