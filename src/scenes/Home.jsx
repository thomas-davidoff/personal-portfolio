import React from "react";
import { useTheme, useMediaQuery, Box, Stack } from "@mui/material";
import Header from 'src/components/Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Home() {
  const theme = useTheme();

  const IconBox = ({icon, to}) => {
    return (
      <a href={to} target='_blank'>
        <Box component={icon} sx={{
        color: theme.palette.primary.main,
        fontSize: '30px',
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          // bgcolor: theme.palette.background.paper,
          scale: "1.10",
          color: theme.palette.secondary.dark
        }
      }} />
      </a>
      
    );
  };

  // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{
      msTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      // border: '1px solid red',
      padding: '20px'
    }}>
      <Header title={"Hi, I'm Thomas"} subtitle={"Programmer | Mechanic | Dancer"}></Header>{" "}
      <Stack direction='row' spacing={theme.spacing(3)} sx={{
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <IconBox icon={LinkedInIcon} to="https://www.google.com" />
        <IconBox icon={GitHubIcon} to="https://www.google.com" />
        <IconBox icon={MailIcon} to="mailto:thomas.davidoff@gmail.com" />
        
      </Stack>
      

    </Box>
  );
}

export default Home;