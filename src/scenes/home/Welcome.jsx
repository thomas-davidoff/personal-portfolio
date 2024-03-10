import React from 'react';
import {
  useTheme, Box, Stack, Typography, Grid,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import IconBox from '@/components/IconBox';
import JsonDisplay from '@/components/JsonDisplay';

function Welcome() {
  const { spacing, constants } = useTheme();

  return (
    // <div />
    <Box
      id="welcome"
      sx={{
        minHeight: `calc(100vh - ${constants.appBarHeight}px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: `${constants.appBarHeight}px`,
        padding: { xs: 5, md: 0 },
      }}
    >
      <Typography variant="h1" gutterBottom textAlign="center">
        Hi, I&apos;m Thomas 👋
      </Typography>
      <Grid container sx={{ maxWidth: '900px' }} spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
          }}
        >
          <JsonDisplay />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 300,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              about
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginTop: { xs: 4, md: 0 } }}>
              I was born in England, and was raised up and down the East coast of the US. I left
              home at an early age to study at the School of American Ballet, before starting a
              career as a full-time professional ballet dancer - first with Boston Ballet, then with
              Atlanta Ballet. After a major back-injury set me back, I immersed myself in
              self-directed learning, and currently work as an integrations specialist for Shiplify.
            </Typography>
            <Typography variant="body1" paragraph>
              I&apos;m always striving to perform at my best, and constantly looking for new things
              to learn. I&apos;m heavily interested combining my arts background with tech.
            </Typography>
            <Typography variant="body1" paragraph>
              Let&apos;s connect!
            </Typography>

            <Stack
              direction="row"
              spacing={spacing(3)}
              sx={{ justifyContent: { xs: 'center', md: 'left' } }}
            >
              <IconBox icon={LinkedInIcon} to="https://www.linkedin.com/in/thomas-davidoff" />
              <IconBox icon={GitHubIcon} to="https://github.com/thomas-davidoff" />
              <IconBox icon={MailIcon} to="mailto:thomas.davidoff@gmail.com" />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Welcome;
