import React from 'react';
import { Box } from '@mui/material';
import Header from '@/components/Header';

function NoPage() {
  return (
    <Box m="20px">
      <Header title="Error (Not really)" subtitle="Not a real error, just making sure it works." />
    </Box>
  );
}

export default NoPage;
