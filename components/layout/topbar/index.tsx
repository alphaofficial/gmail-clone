import { Avatar, Box, Stack } from "@chakra-ui/react";
import Image from "next/image";
import {
  MdHelpOutline,
  MdOutlineSettings,
  MdOutlineApps,
  MdMenu,
} from "react-icons/md";
import SearchInput from "../../core/SearchInput";

const Topbar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: "248px",
        }}
      >
        <Stack direction="row" spacing={2.5} alignItems="center">
          <Box>
            <MdMenu />
          </Box>
          <Box>
            <Image src="/assets/logo.png" alt="Gmail" width={109} height={40} />
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <SearchInput />
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              color: "grey.600",
            }}
          >
            <Box>
              <MdHelpOutline color="inherit" size={25} />
            </Box>
            <Box>
              <MdOutlineSettings color="inherit" size={25} />
            </Box>
            <Box>
              <MdOutlineApps color="inherit" size={25} />
            </Box>
            <Box>
              <Avatar src="https://picsum.photos/200" />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
