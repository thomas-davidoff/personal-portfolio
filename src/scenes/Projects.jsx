import React from "react";
import { useTheme, useMediaQuery, Box, styled, Paper } from "@mui/material";
import Header from "src/components/Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";



function Blogs() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <Header
        title="Blog Page"
        subtitle="Placeholder for whatever the hell this might eventually beeee"
      />
      <Box
        flexGrow={1}
        backgroundColor={theme.palette.primary.dark}
        mt="20px"
        padding="20px"
      >
        Main Content goes here
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 8, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Blogs;
