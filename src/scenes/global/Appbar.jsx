import { useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React, { useContext } from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {
  Box, Button, Stack, Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '@/theme';
import HeaderLink from '@/components/HeaderLink';

export default function MyAppBar() {
  const { palette, constants, spacing } = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <MuiAppBar
      position="fixed"
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
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
                thomas davidoff
              </Typography>
            </Link>
          </Box>

          <Stack
            direction="row"
            spacing={spacing(1)}
            alignItems="center"
            divider={<Divider orientation="vertical" sx={{ height: '50%' }} />}
          >
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
              <HeaderLink key={obj.text} text={obj.text} link={obj.link} />
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
            <Button
              color="secondary"
              variant="outlined"
              component="a"
              href="https://personal-portfolio-pdf-server.s3.us-east-2.amazonaws.com/resume_2_24_2024.docx"
              title="Click to download to my resume."
              target="_blank"
            >
              resume
            </Button>
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: {
                  xs: palette.primary.main,
                },
                ml: '10px',
              }}
              size="medium"
            >
              {palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
