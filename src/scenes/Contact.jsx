import React, { Fragment } from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import Header from "src/components/Header";

function Contact() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Fragment>
      <Box m="20px">
        <Header
          title="Let us interface."
          subtitle="Here, you can find methods to locate and contact the @!*& out of me."
        />
      </Box>
      <Typography>
        Just email me or send me a message on my LinkedIn. Both links are on my
        homepage.
      </Typography>
    </Fragment>
  );
}

export default Contact;
