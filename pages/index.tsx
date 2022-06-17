import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h1">Content</Typography>
      </Box>
    </Layout>
  );
};

export default Home;
