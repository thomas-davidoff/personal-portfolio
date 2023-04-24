import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from '../components/Header';

function NoPage() {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box m="20px">
            <Header
                title='404 ERROR Not handled'
                subtitle='Placeholder for 404 Error page'
            />
        </Box>
    );
}

export default NoPage;