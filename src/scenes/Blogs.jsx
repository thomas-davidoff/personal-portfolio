import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from 'src/components/Header';

function Blogs() {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box m="20px">
            <Header title='Blog Page' subtitle='Placeholder for whatever the hell this might eventually be' />
        </Box>
    );
}

export default Blogs;