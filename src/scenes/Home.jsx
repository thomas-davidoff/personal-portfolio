import React from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Header from 'src/components/Header';

function Home() {
  const theme = useTheme();
  // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box m="20px">
      <Header title={"Hello"} subtitle={"Welcome"}></Header>{" "}
      
    </Box>
  );
}

export default Home;
