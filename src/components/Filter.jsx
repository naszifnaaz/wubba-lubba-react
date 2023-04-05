import { Box, Select, Flex, Input } from "@chakra-ui/react";

export function Filter({ setSearchQuery, setFilterStatus, setFilterGender }) {
  return (
    <Flex m={"1rem"} justifyContent={"space-evenly"}>
      <Box w={"20%"}>
        <Select
          placeholder="Filter by Status"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Box>
      <Box w={"40%"}>
        <Input
          placeholder="Search Character"
          onInput={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      <Box w={"20%"}>
        <Select
          placeholder="Filter by Gender"
          onChange={(e) => setFilterGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </Select>
      </Box>
    </Flex>
  );
}
