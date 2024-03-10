import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
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
        bgcolor: '#c6def1',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
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
          borderBottom={`3px solid ${palette.primary.main}`}
          display="inline-block"
          width="50%"
          margin="auto"
          mb="40px"
        >
          <Typography
            variant="h1"
            color="primary"
            fontWeight="bold"
            align="center"
            sx={{ mb: '5px' }}
          >
            Projects
          </Typography>
          <Typography variant="h5" color="secondary" align="center" sx={{ mb: '15px' }}>
            Check out my most recent projects here. More are on their way!
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }} maxWidth="900px">
          {projectData.map((project) => (
            <Grid xs={6} key={`${project.title}_grid_card`}>
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
