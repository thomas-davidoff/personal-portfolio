import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '@/components/Header';

function Contact() {
  return (
    <>
      <Box m="20px">
        <Header
          title="Let us interface."
          subtitle="Here, you can find methods to locate and contact the @!*& out of me."
        />
      </Box>
      <Typography>
        Just email me or send me a message on my LinkedIn. Both links are on my homepage.
      </Typography>
    </>
  );
}

export default Contact;
