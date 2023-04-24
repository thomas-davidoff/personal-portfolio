import { useState } from "react";
import { ProSidebarProvider, Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import { tokens } from "../../../theme";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
        icon={icon}
        component={<Link to={to} />}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };

const MySidebar = () => {
    const { collapseSidebar } = useProSidebar();
    const [selected, setSelected] = useState("Home");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const viewHeight = window.outerHeight;
    return (
        <Sidebar className="sidebar" breakPoint="always" style={{
backgroundColor:colors.primary[500]
        }}>
          <Box>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <Typography variant="h5">Welcome</Typography>
          </MenuItem>

          {/* Homepage */}
          <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Blog page */}
            <Item
              title="Blogs"
              to="/blogs"
              icon={<NotesOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Contact Page */}
            <Item
              title="Contact Me"
              to="/contact"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* Placeholder PT app */}
            <SubMenu
                icon={<ReceiptOutlinedIcon />}
                label = {<Typography>Test Pages (404)</Typography>}
            >
                <div>
                    <Item
                        title="Page 1"
                        to="/page 1"
                        icon={<HelpOutlineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Page 2"
                        to="/page 2"
                        icon={<HelpOutlineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
                
            </SubMenu>
        </Menu>
        </Box>
      </Sidebar>
    )
}

export default MySidebar;