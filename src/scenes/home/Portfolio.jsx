import { Box, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PaperCard from '@/components/PaperCard';
import projectData from '@/data/projectsData.json';

function Portfolio() {
  const { constants, palette } = useTheme();
  return (
    <Box
      id="portfolio"
      sx={{
        minHeight: `calc(100vh - ${constants.appBarHeight}px)`,
        bgcolor: palette.background.accent,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: `${constants.appBarHeight}px)`,
      }}
    >
      <Box
        padding="20px"
        mt="40px"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          borderBottom={`2px solid ${palette.gray.dark}`}
          display="inline-block"
          margin="auto"
          mb="40px"
        >
          <Typography
            variant="h2"
            color={palette.text.primary}
            fontWeight="bold"
            align="center"
            sx={{ mb: '5px' }}
          >
            Projects
          </Typography>
          <Typography
            variant="h4"
            color={palette.text.secondary}
            align="center"
            sx={{ mb: '15px' }}
          >
            Check out my most recent projects here. More are on their way!
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }} maxWidth="900px">
          {projectData.map((project) => (
            <Grid item xs={6} key={`${project.title}_grid_card`}>
              <PaperCard
                title={project.title}
                technologies={project.technologies}
                links={project.links}
                description={project.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Portfolio;
