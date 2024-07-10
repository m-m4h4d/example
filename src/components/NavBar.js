import * as React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];

function ResponsiveAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar sx={{ background: 'white', color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Box 
                width={'70%'} 
                alignItems={'center'} 
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <Typography variant='h2'>LOGO</Typography>
                <Button sx={{ color: 'black' }} endIcon={<ExpandMore />}><b>Services</b></Button>
                {pages.map((page) => (
                    <Button sx={{ color: 'black' }} key={page}><b>{page}</b></Button>
                ))}
                <Box
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    textAlign={'center'}
                >
                    <Button 
                        sx={{ color: 'black' }} 
                        endIcon={open ? <ExpandLess /> : <ExpandMore />}
                    >
                        <b>Hire Now</b>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMouseLeave}
                        MenuListProps={{ onMouseLeave: handleMouseLeave }}
                        PaperProps={{ elevation: 0, sx: { backgroundColor: 'primary.main', color: 'white', textAlign: 'center' } }}
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    >
                        {hireOptions.map((option) => (
                            <MenuItem key={option} onClick={handleMouseLeave}>{option}</MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Button variant='contained'><b>Get A Free Quote</b></Button>
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
