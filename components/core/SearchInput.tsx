import { Box, FormControl, Input } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <Box>
      <FormControl>
        <Input id="email" type="email" />
      </FormControl>
    </Box>
  );
};

export default SearchInput;
