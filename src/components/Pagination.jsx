import { Box, Button } from "@chakra-ui/react";

export function Pagination({ page, incPage, decPage }) {
  return (
    <Box m={"2rem"}>
      <Button mr={"10px"} colorScheme="facebook" onClick={decPage}>
        Prev
      </Button>
      <Button mr={"10px"} colorScheme="facebook">
        {page}
      </Button>
      <Button onClick={incPage} colorScheme="facebook">
        Next
      </Button>
    </Box>
  );
}
