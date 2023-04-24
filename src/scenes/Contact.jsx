import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from 'src/components/Header';

function Contact() {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box m="20px">
            <Header title='Let us interface.' subtitle='Here, you can find methods to locate and contact the @!*& out of me.' />
        </Box>
        
    );
}

export default Contact;