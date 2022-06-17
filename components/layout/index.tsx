import { FC } from "react";
import { Box } from "@mui/material";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh" py={0.5} px={1}>
      <Box
        sx={{
          width: "248px",
        }}
      >
        <Topbar />
      </Box>
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
