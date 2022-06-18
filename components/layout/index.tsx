import { FC } from "react";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { Box, Divider } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <Box py={2} px={4}>
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
