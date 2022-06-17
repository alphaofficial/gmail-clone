import { Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Topbar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Stack direction="row" spacing={2.5} alignItems="center">
        <Box>
          <MenuIcon />
        </Box>
        <Box>
          <Image src="/assets/logo.png" alt="Gmail" width={109} height={40} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
