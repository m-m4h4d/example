import React from 'react';
import { Link } from 'react-router-dom';
import { RequestQuote } from '..';
import { ExpandMore, Menu as MenuIcon, Close } from '@mui/icons-material';
import { Typography, Box, Button, MenuItem, Divider, IconButton, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];

const pages = [
    { label: 'About Us', link: '/about' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Career', link: '/career' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Contact Us', link: '/contact' }
];

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

function MobileView() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);
    const servicesRef = React.useRef(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setExpanded(false);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    React.useEffect(() => {
        if (expanded === 'panel1' && servicesRef.current) {
            window.scrollTo({
                top: servicesRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    }, [expanded]);

    const getHoverStyles = (panel) => ({
        '&:hover': {
            backgroundColor: expanded !== panel ? 'primary.dark' : 'inherit',
            color: expanded !== panel ? 'white' : 'inherit',
            cursor: expanded !== panel ? 'pointer' : 'default',
        },
    });

    return (
        <>
            <Box component={Link} to="/" sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'flex-start', p: 0, m: 0, width: '10%', cursor: 'pointer', textDecoration: "none" }}>
                <Typography component={Link} to="/" variant='h3' sx={{ flexGrow: 1, mx: 1, color: 'black', textDecoration: 'none', cursor: 'pointer' }}>LOGO</Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'flex-end', width: '100%' }}>
                <IconButton
                    size="large"
                    aria-label="open drawer"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
                    color="inherit"
                >
                    {anchorElNav ? <Close /> : <MenuIcon />}
                </IconButton>
                {anchorElNav && (
                    <Paper
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            position: 'fixed',
                            top: 60,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'primary.main',
                            overflowY: 'auto'
                        }}
                    >
                        {pages.map((page, index) => (
                            <>
                                <MenuItem
                                    key={index}
                                    component={Link}
                                    to={page.link}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: 'primary.main',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                            color: 'white',
                                            cursor: 'pointer',
                                        },
                                    }}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                                <Divider />
                            </>
                        ))}
                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                            elevation={0}
                            sx={{
                                m: 0,
                                p: 0,
                                color: 'primary.main',
                                ...getHoverStyles('panel1'),
                            }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1d-content" id="panel1d-header" sx={{ my: 0, py: 0 }}>
                                <Typography textAlign="center">Services</Typography>
                            </AccordionSummary>
                            <AccordionDetails ref={servicesRef} sx={{ my: 0, py: 0 }}>
                                {Object.keys(serviceOptions).map((service) => (
                                    <React.Fragment key={service}>
                                        <MenuItem onClick={handleChange('panel1')} sx={{ color: 'black' }}>
                                            <Typography>{service}</Typography>
                                        </MenuItem>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2 }}>
                                            {serviceOptions[service].map((subOption) => (
                                                <MenuItem key={subOption} onClick={handleChange('panel1')}>
                                                    <Typography sx={{ color: 'primary.main' }}>{subOption}</Typography>
                                                </MenuItem>
                                            ))}
                                        </Box>
                                    </React.Fragment>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                            elevation={0}
                            sx={{
                                m: 0,
                                p: 0,
                                color: 'primary.main',
                                ...getHoverStyles('panel2'),
                            }}>
                            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2d-content" id="panel2d-header" sx={{ my: 0, py: 0 }}>
                                <Typography textAlign="center">Hire Now</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ my: 0, py: 0 }}>
                                {hireOptions.map((option) => (
                                    <MenuItem key={option} onClick={handleChange('panel2')} sx={{ color: 'black' }}>
                                        <Typography textAlign="center">{option}</Typography>
                                    </MenuItem>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                        <MenuItem>
                            <Button variant='contained' onClick={handleOpen} sx={{ mx: 1 }}>
                                <b>Get A Free Quote</b>
                            </Button>
                        </MenuItem>
                    </Paper>
                )}
            </Box>
            <RequestQuote open={open} onClose={handleClose} />
        </>
    );
}

export default MobileView;

