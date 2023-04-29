import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { ColorModeContext } from "src/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { drawerWidth } from 'src/scenes/global/sidebar/Sidebar';
import { sidebarContext } from 'src/scenes/global/sidebar/SidebarContext';
import { Divider, alpha, hexToRgb } from '@mui/material';
import { Box } from '@mui/material';
import { Button, Stack } from '@mui/material';
import Link from '@mui/material/Link';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MyAppBar() {
  const theme = useTheme();
  const { sbIsOpen, toggle } = useContext(sidebarContext);
  const colorMode = useContext(ColorModeContext);

  return (
      <AppBar 
        position="fixed" 
        open={sbIsOpen}
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.9),

          boxShadow:
          '0px -15px 4px -1px rgba(0,,0,0.2), 1px -17px 20px 0px rgba(0,0,0,0.14), 0px 2px 12px 0px rgba(0,0,0,0.12)'
        }}
      >
        <Toolbar>
          <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
          flexGrow={1}
          >
            {/* Open Close toggle */}
          <Box display='flex' flexDirection='row' alignItems='center' sx={{ ...(sbIsOpen && { display: 'none' }) }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Thomas Davidoff
          </Typography>
          
          </Box>
          {/* Title */}

          {/* Dark/Light and Links */}
          <Box>
            
            <IconButton 
            onClick={colorMode.toggleColorMode}
            sx={{color: "#FFF"}}
            >
          {theme.palette.mode === "dark" ? (

           <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
          </Box>
          </Stack>
          
          
          
          

          
          
        </Toolbar>
      </AppBar>
  );
}