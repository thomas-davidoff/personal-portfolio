import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { useContext } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {
  alpha, Box, Button, Stack,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '@/theme';
import HeaderLink from '@/components/HeaderLink';

export default function MyAppBar() {
  const {
    palette, constants, breakpoints, spacing,
  } = useTheme();
  const colorMode = useContext(ColorModeContext);

  const smallScreen = useMediaQuery(breakpoints.down('md'));

  const ResumeButton = styled(Button)(() => ({
    border: !smallScreen && `solid 1px ${palette.primary.main}`,
    '&:hover': {
      backgroundColor:
        smallScreen === true
          ? alpha(palette.primary.main, 0.1)
          : alpha(palette.background.paper, 0.1),
      border: !smallScreen && `solid 1px ${palette.primary.main}`,
    },
  }));

  return (
    <MuiAppBar
      position="fixed"
      // elevation={4}
      sx={{
        height: constants.appBarHeight,
        backgroundColor: palette.background.paper,
        color: {
          xs: palette.primary.main,
          md: palette.primary.main,
        },
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            border: '1px solid green',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '15%',
              whiteSpace: 'nowrap',
              justifyContent: 'flex-start',
              border: '1px solid red',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                thomas davidoff
              </Typography>
            </Link>
          </Box>

          <Stack direction="row" spacing={spacing(1)} alignItems="center" border="1px solid blue">
            {[
              {
                text: 'Home',
                link: '/#welcome',
              },
              {
                text: 'Projects',
                link: '/#portfolio',
              },
            ].map((obj) => (
              <HeaderLink text={obj.text} link={obj.link} />
            ))}
          </Stack>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '15%',
              justifyContent: 'flex-end',
            }}
          >
            <ResumeButton
              variant="outlined"
              component="a"
              href="https://personal-portfolio-pdf-server.s3.us-east-2.amazonaws.com/resume_2_24_2024.docx"
              title="Click to go to my resume."
              target="_blank"
            >
              resume
            </ResumeButton>
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: {
                  xs: palette.primary.main,
                },
                ml: '10px',
              }}
            >
              {palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
