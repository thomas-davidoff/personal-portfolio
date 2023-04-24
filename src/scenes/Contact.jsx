import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from 'src/components/Header';

function Contact() {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        <Box m="20px">
            <Header title='Contact Me' subtitle='Placeholder for the contact page.' />
        </Box>
        
    );
}

export default Contact;