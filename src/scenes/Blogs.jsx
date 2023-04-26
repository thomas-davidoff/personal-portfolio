import React from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import Header from 'src/components/Header';

function Blogs() {
    const theme = useTheme();
    // const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
    return (
        // <Box m="15px" sx={{
        //     backgroundColor: 'background.paper',
        //     boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        //     padding: '25px',
        //     justifyContent: 'center',
        //     }}>
        //     <Header title='Blog Page' subtitle='Placeholder for whatever the hell this might eventually beeee' />
        // </Box>
        <React.Fragment>
            <Header title='Blog Page' subtitle='Placeholder for whatever the hell this might eventually beeee' />
            <Box>
                Hi
            </Box>
        </React.Fragment>
        
    );
}

export default Blogs;