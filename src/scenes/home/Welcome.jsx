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
  const { spacing, constants, palette } = useTheme();

  return (
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
      <Typography marginBottom={3}>
        <Typography variant="h1" textAlign="center" component="span" color={palette.text.primary}>
          👋, I&apos;m&nbsp;
        </Typography>
        <Typography component="span" variant="h1" color={palette.primary.main}>
          Thomas
        </Typography>
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
              variant="h3"
              gutterBottom
              color={palette.text.primary}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              about
            </Typography>
            <Typography
              variant="body1"
              color={palette.text.secondary}
              paragraph
              sx={{ marginTop: { xs: 4, md: 0 } }}
            >
              I was born in England, but was raised on the East coast of the US. I left home at an
              early age to study at the School of American Ballet, before starting a career as a
              full-time professional ballet dancer - first with Boston Ballet, then with Atlanta
              Ballet. After a major back injury put a halt to my career, I immersed myself in
              self-directed learning, teaching myself to code in my spare-time. I currently work for Shiplify as a devops and secops engineer (DevSecOps)
            </Typography>
            <Typography variant="body1" paragraph color={palette.text.secondary}>
              I&apos;m always striving to perform at my best, and consistently looking for new
              things to learn. I&apos;m heavily interested in combining my arts background with
              tech.
            </Typography>
            <Typography variant="body1" paragraph color={palette.text.secondary}>
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
