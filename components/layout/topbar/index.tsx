import { Avatar, Box, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchInput from "../../core/SearchInput";
import theme from "../../../theme";

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
            <MenuIcon />
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
              color: theme.palette.grey[600],
            }}
          >
            <Box>
              <HelpOutlineOutlinedIcon color="inherit" />
            </Box>
            <Box>
              <SettingsOutlinedIcon color="inherit" />
            </Box>
            <Box>
              <AppsOutlinedIcon color="inherit" />
            </Box>
            <Box>
              <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
