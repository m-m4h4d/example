import * as React from 'react';
import { ExpandLess, ExpandMore, Menu as MenuIcon, Close } from '@mui/icons-material';
import { Typography, Box, Button, Menu, MenuItem, Divider, IconButton } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];
const services = ['Digital Marketing', 'Graphic Designing', 'Web Development', 'Mobile Development', 'SEO Content Writing'];

const serviceOptions = {
    DigitalMarketingOptions: [
        'Social Media Marketing',
        'Affiliate Marketing',
        'Search Engine Optimization (SEO)',
        'Search Engine Marketing (SEM)'
    ],

    GraphicDesigningOptions: [
        'Logo And Brand Identity',
        'Web And App Design',
        'Visual Design',
        'Marketing Design'
    ],

    WebDevelopmentOptions: [
        'Business Website Design',
        'ECommerce Web Design',
        'Landing Page Design',
        'Dropshipping Website',
        'Custom Web Development',
        'Platform Design'
    ],

    MobileDevelopmentOptions: [
        'Android App Development',
        'IOS App Development'
    ],

    SEOContentWritingOptions: [
        'Technical Writing Services',
        'Research and Analysis',
        'Elearning Content'
    ],
}

function Hamburger() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElHire, setAnchorElHire] = React.useState(null);
    const [anchorElServices, setAnchorElServices] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenServices = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleCloseServices = () => {
        setAnchorElServices(null);
    };

    const handleOpenHire = (event) => {
        setAnchorElHire(event.currentTarget);
    };

    const handleCloseHire = () => {
        setAnchorElHire(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'flex-end', width: '100%' }}>
            <IconButton
                size="large"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                onClose={handleCloseNavMenu}
                color="inherit"
            >
                {anchorElNav ? <Close /> : <MenuIcon />}
            </IconButton>
            <Menu
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
                    onClose={handleCloseServices}
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
                    }}>
                    <Typography textAlign="center">Services</Typography>
                    {anchorElServices ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Menu
                    id="menu-services"
                    anchorEl={anchorElServices}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElServices)}
                    onClose={handleCloseServices}
                    sx={{
                        display: { md: 'block', lg: 'none' },
                        width: '100%',
                    }}
                >
                    {services.map((option) => (
                        <MenuItem key={option} onClick={handleCloseServices}>
                            <Typography textAlign="center">{option}</Typography>
                            <Divider />
                        </MenuItem>
                    ))}
                </Menu>
                <MenuItem
                    onClick={handleOpenHire}
                    onClose={handleCloseHire}
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
                    }}>
                    <Typography textAlign="center">Hire Now</Typography>
                    {anchorElHire ? <ExpandLess /> : <ExpandMore />}
                </MenuItem>
                <Menu
                    id="menu-hire"
                    anchorEl={anchorElHire}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElHire)}
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
            </Menu>
        </Box>
    );
}

export default Hamburger;
