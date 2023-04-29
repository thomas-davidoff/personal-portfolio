import React from "react";
import { useTheme, useMediaQuery, Box, styled, Paper, Card, Divider, Button } from "@mui/material";
import Header from "src/components/Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PaperCard from "src/components/PaperCard";



function Blogs() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
    elevation: 3
    
  }));


  return (
    <React.Fragment>
      <Header
        title="Projects"
        subtitle="This subtitle will give more information to the title, which is above."
      />
      <Box
        flexGrow={1}
        // backgroundColor={theme.palette.primary.dark}
        mt="20px"
        padding="20px"
      >
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, md: 12 }}
          >
            <Grid xs={6}>
                <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
            <Grid xs={6}>
              <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
            <Grid xs={6}>
            <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
            <Grid xs={6}>
            <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
            <Grid xs={6}>
            <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
            <Grid xs={6}>
            <PaperCard title='Project 1' subtitle='This is project 1' />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Blogs;
