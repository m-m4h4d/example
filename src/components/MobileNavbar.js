import * as React from 'react';
import { ExpandLess, ExpandMore, Menu as MenuIcon, Close } from '@mui/icons-material';
import { Typography, Box, Button, Menu, MenuItem, Divider, IconButton, Paper } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];

const serviceOptions = {
    'Digital Marketing': [
        'Social Media Marketing',
        'Affiliate Marketing',
        'Search Engine Optimization (SEO)',
        'Search Engine Marketing (SEM)'
    ],

    'Graphic Designing': [
        'Logo And Brand Identity',
        'Web And App Design',
        'Visual Design',
        'Marketing Design'
    ],

    'Web Development': [
        'Business Website Design',
        'ECommerce Web Design',
        'Landing Page Design',
        'Dropshipping Website',
        'Custom Web Development',
        'Platform Design'
    ],

    'Mobile Development': [
        'Android App Development',
        'IOS App Development'
    ],

    'SEO Content Writing': [
        'Technical Writing Services',
        'Research and Analysis',
        'Elearning Content'
    ],
}

function MobileNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorHire, setAnchorHire] = React.useState(null);
    const [anchorServices, setAnchorServices] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenServices = (event) => {
        setAnchorServices(event.currentTarget);
    };

    const handleCloseServices = () => {
        setAnchorServices(null);
    };

    const handleOpenHire = (event) => {
        setAnchorHire(event.currentTarget);
    };

    const handleCloseHire = () => {
        setAnchorHire(null);
    };

    return (<>
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'flex-start', p: 0, m: 0, width: '10%' }}>
            <Typography variant='h3' sx={{ flexGrow: 1, mx: 1 }}>LOGO</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'flex-end', width: '100%' }}>
            <IconButton
                size="large"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                {anchorElNav ? <Close /> : <MenuIcon />}
            </IconButton>
            <Paper
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { md: 'block', lg: 'none' },
                    width: '100%',
                    color: 'primary.main',
                }}
            >
                {pages.map((page) => (
                    <MenuItem
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                            color: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                                color: 'white',
                                cursor: 'pointer',
                            },
                        }}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                <MenuItem
                    onClick={handleOpenServices}
                    aria-label="open drawer"
                    aria-controls="menu-services"
                    aria-haspopup="true"
                    sx={{
                        justifyContent: 'space-between',
                        color: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            color: 'white',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Typography textAlign="center">Services</Typography>
                    {anchorServices ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Menu
                    id="menu-services"
                    anchorEl={anchorServices}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorServices)}
                    onClose={handleCloseServices}
                    sx={{
                        display: { md: 'flex', lg: 'none' },
                        width: '100%',
                        flexDirection: 'column',
                    }}
                >
                    {Object.keys(serviceOptions).map((service) => (
                        <React.Fragment key={service}>
                            <Divider />
                            <MenuItem>
                                <Typography>{service}</Typography>
                            </MenuItem>
                            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                                {serviceOptions[service].map((subOption) => (
                                    <MenuItem key={subOption} onClick={handleCloseServices}>
                                        <Typography sx={{ color: 'primary.main' }}>{subOption}</Typography>
                                    </MenuItem>
                                ))}
                            </Box>
                            <Divider />
                        </React.Fragment>
                    ))}
                </Menu>
                <MenuItem
                    onClick={handleOpenHire}
                    aria-label="open drawer"
                    aria-controls="menu-hire"
                    aria-haspopup="true"
                    sx={{
                        justifyContent: 'space-between',
                        color: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            color: 'white',
                            cursor: 'pointer',
                        },
                    }}
                >
                    <Typography textAlign="center">Hire Now</Typography>
                    {anchorHire ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Menu
                    id="menu-hire"
                    anchorEl={anchorHire}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorHire)}
                    onClose={handleCloseHire}
                    sx={{
                        display: { md: 'block', lg: 'none' },
                        width: '100%',
                    }}
                >
                    {hireOptions.map((option) => (
                        <MenuItem key={option} onClick={handleCloseHire}>
                            <Typography textAlign="center">{option}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
                <MenuItem>
                    <Button variant='contained' sx={{ mx: 1 }}>
                        <b>Get A Free Quote</b>
                    </Button>
                </MenuItem>
            </Paper>
        </Box>
    </>
    );
}

export default MobileNavbar;
