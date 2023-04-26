import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Divider from "@mui/material/Divider";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        color='primary'
        fontWeight="bold"
        align= 'center'
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color='secondary' align= 'center' sx={{mb:'15px'}}>
        {subtitle}
      </Typography>
      <Divider/>
    </React.Fragment>
  );
};

export default Header;