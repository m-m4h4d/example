import * as React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Typography, Box, Button } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];

function ResponsiveAppBar() {
    return (
        <AppBar sx={{ background: 'white', color: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={'70%'} alignItems={'center'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Typography variant='h2'>LOGO</Typography>
                <Button sx={{ color: 'black' }} endIcon={<ExpandMore />}>Services</Button>
                {pages.map((page) => (
                    <Button sx={{ color: 'black' }} key={page}>{page}</Button>
                ))}
                <Button sx={{ color: 'black' }} endIcon={<ExpandMore />}>Hire Now</Button>
                <Button variant='contained'>Get A Free Quote</Button>
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
