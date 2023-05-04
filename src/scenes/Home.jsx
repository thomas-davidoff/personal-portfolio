import React, { Fragment } from "react";
import { useTheme, useMediaQuery, Box, Stack } from "@mui/material";
import Header from "src/components/Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function Home() {
  const theme = useTheme();

  const IconBox = ({ icon, to }) => {
    return (
      <a href={to} target="_blank" rel="noopener">
        <Box
          component={icon}
          sx={{
            color: theme.palette.primary.main,
            fontSize: "30px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              // bgcolor: theme.palette.background.paper,
              scale: "1.10",
              color: theme.palette.secondary.dark,
            },
          }}
        />
      </a>
    );
  };

  // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Fragment>
      <Box
        sx={{
          msTransform: "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "50%",
          left: "50%",
          // border: '1px solid red',
          padding: "20px",
        }}
      >
        <Header
          title={"Hi, I'm Thomas"}
          subtitle={"Programmer | Mechanic | Dancer"}
        ></Header>{" "}
        <Stack
          direction="row"
          spacing={theme.spacing(3)}
          sx={{
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconBox
            icon={LinkedInIcon}
            to="https://www.linkedin.com/in/thomas-davidoff"
          />
          <IconBox icon={GitHubIcon} to="https://github.com/thomas-davidoff" />
          <IconBox icon={MailIcon} to="mailto:thomas.davidoff@gmail.com" />
        </Stack>
      </Box>
    </Fragment>
  );
}

export default Home;
