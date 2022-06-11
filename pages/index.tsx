import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box>
      <Box>
        <Typography>Top bar (search and avatar / menu section)</Typography>
      </Box>
      <Box>
        <Box>
          <Typography>Sidebar</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>Action and pagination</Typography>
          </Box>
          <Box>
            <Typography>Email list and tabs</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
