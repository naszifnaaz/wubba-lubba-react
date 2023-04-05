import { Flex, Image, Heading, Badge } from "@chakra-ui/react";
import { CharacterModal } from "./CharacterModal";

export function CharacterCard({ character, index }) {
  let statusColor;
  switch (character.status) {
    case "Alive":
      statusColor = "green";
      break;
    case "Dead":
      statusColor = "red";
      break;
    case "unknown":
      statusColor = "orange";
      break;
    default:
      statusColor = "black";
  }
  return (
    <Flex
      key={index}
      flexDirection={"column"}
      alignItems={"center"}
      p={"1rem"}
      m={"1rem"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Image src={character.image} alt={character.name} width={"500px"} />
      <Badge ml="1" colorScheme={statusColor} fontSize={"1rem"} mt={"10px"}>
        {character.status}
      </Badge>
      <Heading size={"lg"}>{character.name}</Heading>
      <CharacterModal character={character} statusColor={statusColor} />
    </Flex>
  );
}
