import React from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Header from "../components/Header";

function Home() {
  const theme = useTheme();
  // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box m="20px">
      <Header title={"Hello"} subtitle={"Welcome"}></Header>{" "}
      <div>
        <h2>These are the things I need to do:</h2>
        <li>
          Create theme, understand context
          <ul>create dark/light mode</ul>
          <ul>Make sure every page uses theme</ul>
        </li>
        <li>Create top-bar that responds similarly to the sidebar</li>
        <li>
          Add a "completely hide sidebar" button to the bottom of the sidebar,
          that remains on the screen after the sidebar collapses
        </li>
        <ul>
          Create "parent page" ... Does the topbar go into the parent page?
          (Layout)
        </ul>
      </div>
    </Box>
  );
}

export default Home;
