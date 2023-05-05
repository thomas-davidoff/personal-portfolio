import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { sidebarContext } from "src/scenes/global/sidebar/SidebarContext";
import { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

export const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MySidebar() {
  const theme = useTheme();
  const colors = theme.palette;
  const { sbIsOpen, toggle } = useContext(sidebarContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    toggle();
  };

  const menuItemCount = 0;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={sbIsOpen}
      >
        <DrawerHeader>
          <IconButton onClick={toggle}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {[
            {
              text: "Home",
              icon: <HomeOutlinedIcon />,
              link: "/",
              position: 0,
            },
            {
              text: "Projects",
              icon: <NotesOutlinedIcon />,
              link: "/projects",
              position: 1,
            },
            {
              text: "Contact",
              icon: <EmailOutlinedIcon />,
              link: "/contact",
              position: 2,
            },
          ].map((mappedObject) => (
            <ListItem
              key={`${mappedObject.text}_${mappedObject.link}`}
              disablePadding
            >
              <ListItemButton
                component={Link}
                to={mappedObject.link}
                selected={selectedIndex === mappedObject.position}
                onClick={(event) =>
                  handleListItemClick(event, mappedObject.position)
                }
              >
                <ListItemIcon>{mappedObject.icon}</ListItemIcon>
                <ListItemText primary={mappedObject.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <Box
          display="flex"
          // border='1px solid red'
          justifyContent="center"
        >
          <Button
            variant="contained"
            component="a"
            href="https://personal-portfolio-pdf-server.s3.us-east-2.amazonaws.com/resume_2_26_23.pdf"
            title="Click to go to my resume."
            target="_blank"
            rel='noopener'
            sx={{
              padding: "5px",
              mt: "10px",
            }}
          >
            Resume
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
