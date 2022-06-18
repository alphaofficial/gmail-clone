import { FC } from "react";
import { Box } from "@mui/material";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import Divider from "@mui/material/Divider";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <Box py={0.5} px={1}>
        <Topbar />
      </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Box
          sx={{
            width: "248px",
          }}
        >
          <Sidebar />
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
