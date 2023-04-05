import {
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Image,
  Heading,
  Badge,
  Flex,
  Box,
} from "@chakra-ui/react";

export function CharacterModal({ character, statusColor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} m={"10px"}>
        View More
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Character Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody margin={"auto"}>
            <Image src={character.image} />
            <Box m={"1rem"}>
              <Flex mb={"10px"}>
                <Heading>{character.name}</Heading>
                <Badge
                  ml="1"
                  colorScheme={statusColor}
                  fontSize={"1rem"}
                  m={"10px"}
                >
                  {character.status}
                </Badge>
              </Flex>
              <Heading size={"sm"}>Species : {character.species}</Heading>
              <Heading size={"sm"}>Gender : {character.gender}</Heading>
              <Heading size={"sm"}>
                Type : {character.type === "" ? "NA" : character.type}
              </Heading>
              <Heading size={"sm"}>Origin : {character.origin.name}</Heading>
              <Heading size={"sm"}>
                Location : {character.location.name}
              </Heading>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
