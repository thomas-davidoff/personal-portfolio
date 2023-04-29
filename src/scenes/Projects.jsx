import React from "react";
import { useTheme, useMediaQuery, Box, styled, Paper, Card, Divider, Button } from "@mui/material";
import Header from "src/components/Header";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PaperCard from "src/components/PaperCard";
import projectData from "src/data/projectsData.json"



function Blogs() {
  const theme = useTheme();
  const projects = projectData

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
            {projects.map((project) => (
              <Grid xs={6} key={`${project.title}_grid_card`}>
                <PaperCard
                  title={project.title}
                  technologies={project.technologies}
                  links={project.links}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Blogs;
