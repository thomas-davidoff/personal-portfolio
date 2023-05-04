import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ColorModeContext } from "src/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { drawerWidth } from "src/scenes/global/sidebar/Sidebar";
import { sidebarContext } from "src/scenes/global/sidebar/SidebarContext";
import { Divider, alpha, hexToRgb } from "@mui/material";
import { Box } from "@mui/material";
import { Button, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MyAppBar() {
  const theme = useTheme();
  const { sbIsOpen, toggle } = useContext(sidebarContext);
  const colorMode = useContext(ColorModeContext);
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="fixed"
      open={sbIsOpen}
      elevation={4}
      sx={{
        backgroundColor: {
          xs: "transparent",
          md: alpha(theme.palette.primary.main, 0.9),
        },
        color: {
          xs: theme.palette.primary.main,
          md: theme.palette.background.paper,
        },
        boxShadow: {
          xs: 'none',
          md: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
      
        }
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          flexGrow={1}
        >
          {/* Open Close toggle */}
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{ ...(sbIsOpen && { display: "none" }) }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggle}
              edge="start"
              sx={{
                display: { md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Link
                href={'/'}
                color="inherit"
                underline="none"
              >
                <Typography variant="h5">Thomas Davidoff</Typography>
              </Link>
          </Box>

          <Stack
            direction="row"
            spacing={theme.spacing(1)}
            alignItems="center"
          >
            {[
              {
                text: "Projects",
                link: "/projects",
              },
              {
                text: "Contact",
                link: "/contact",
              },
            ].map((obj) => (
              <Link
                href={obj.link}
                color="inherit"
                underline="none"
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {obj.text}
              </Link>
            ))}
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                color: {
                  md: theme.palette.background.paper,
                  xs: theme.palette.primary.main,
                },
              }}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
