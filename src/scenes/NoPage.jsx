import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from 'src/components/Header';

function NoPage() {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box m="20px">
            <Header
                title='Error (Not really)'
                subtitle='Not a real error, just making sure it works.'
            />
        </Box>
    );
}

export default NoPage;