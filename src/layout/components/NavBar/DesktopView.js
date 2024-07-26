import React from 'react';
import { Link } from 'react-router-dom';
import { RequestQuote } from '../';
import { ExpandLess, ExpandMore, EmojiObjectsOutlined, VerifiedOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { Typography, Box, Button, Menu, MenuItem, Divider, Grid, ListItemText } from '@mui/material';
import {
    SocialMediaMarketing,
    AffiliateMarketing,
    SEO,
    SEM,
    LogoAndBrandIdentity,
    WebAndAppDesign,
    VisualDesign,
    MarketingDesign,
    BusinessWebsiteDesign,
    ECommerceWebDesignAndDevelopment,
    LandingPageDesign,
    DropshippingWebsite,
    CustomWebDevelopmentServices,
    PlatformDesign,
    AndroidAppDevelopment,
    IOSAppDevelopment,
    TechnicalWritingServices,
    ResearchAndAnalysis,
    ElearningContent
} from '../../assets/svg';

const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];
const services = ['Digital Marketing', 'Graphic Designing', 'Web Development', 'Mobile Development', 'SEO Content Writing'];

const pages = [
    { label: 'About Us', link: '/about' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Career', link: '/career' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Contact Us', link: '/contact' }
];

const DigitalMarketingOptions = [
    { label: 'Social Media Marketing', icon: <SocialMediaMarketing style={{ height: '20%' }} /> },
    { label: 'Affiliate Marketing', icon: <AffiliateMarketing style={{ height: '20%' }} /> },
    { label: 'Search Engine Optimization (SEO)', icon: <SEO style={{ height: '20%' }} /> },
    { label: 'Search Engine Marketing (SEM)', icon: <SEM style={{ height: '20%' }} /> }
];

const GraphicDesigningOptions = [
    { label: 'Logo And Brand Identity', icon: <LogoAndBrandIdentity style={{ height: '20%' }} /> },
    { label: 'Web And App Design', icon: <WebAndAppDesign style={{ height: '20%' }} /> },
    { label: 'Visual Design', icon: <VisualDesign style={{ height: '20%' }} /> },
    { label: 'Marketing Design', icon: <MarketingDesign style={{ height: '20%' }} /> }
];

const WebDevelopmentOptions = [
    { label: 'Business Website Design', icon: <BusinessWebsiteDesign style={{ height: '20%' }} />, link: '/web-development/business-website' },
    { label: 'ECommerce Web Design', icon: <ECommerceWebDesignAndDevelopment style={{ height: '20%' }} /> },
    { label: 'Landing Page Design', icon: <LandingPageDesign style={{ height: '20%' }} /> },
    { label: 'Dropshipping Website', icon: <DropshippingWebsite style={{ height: '20%' }} /> },
    { label: 'Custom Web Development', icon: <CustomWebDevelopmentServices style={{ height: '20%' }} /> },
    { label: 'Platform Design', icon: <PlatformDesign style={{ height: '20%' }} /> }
];

const MobileDevelopmentOptions = [
    { label: 'Android App Development', icon: <AndroidAppDevelopment style={{ height: '10%' }} /> },
    { label: 'IOS App Development', icon: <IOSAppDevelopment style={{ height: '10%' }} /> }
];

const SEOContentWritingOptions = [
    { label: 'Technical Writing Services', icon: <TechnicalWritingServices style={{ height: '20%' }} /> },
    { label: 'Research and Analysis', icon: <ResearchAndAnalysis style={{ height: '20%' }} /> },
    { label: 'Elearning Content', icon: <ElearningContent style={{ height: '20%' }} /> }
];

const highlights = [
    { title: '7+ Years Of Excellence', icon: <VerifiedOutlined fontSize='large' /> },
    { title: '1000+ Projects Delivered', icon: <PhoneAndroidOutlined fontSize='large' /> },
    { title: '200+ Technology Experts', icon: <EmojiObjectsOutlined fontSize='large' /> }
];

function DesktopView() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorElHire, setAnchorElHire] = React.useState(null);
    const openHire = Boolean(anchorElHire);
    const [anchorElServices, setAnchorElServices] = React.useState(null);
    const openServices = Boolean(anchorElServices);
    const [currentService, setCurrentService] = React.useState(null);

    const handleMouseEnterServices = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleMouseLeaveServices = () => {
        setAnchorElServices(null);
        setCurrentService('Digital Marketing');
    };

    const handleMouseEnterService = (service) => {
        setCurrentService(service);
    };

    const handleMouseLeaveService = () => {
        setCurrentService(currentService);
    };

    const handleMouseEnterHire = (event) => {
        setAnchorElHire(event.currentTarget);
    };

    const handleMouseLeaveHire = () => {
        setAnchorElHire(null);
    };

    const getOptions = (service) => {
        switch (service) {
            case 'Digital Marketing':
                return DigitalMarketingOptions;
            case 'Graphic Designing':
                return GraphicDesigningOptions;
            case 'Web Development':
                return WebDevelopmentOptions;
            case 'Mobile Development':
                return MobileDevelopmentOptions;
            case 'SEO Content Writing':
                return SEOContentWritingOptions;
            default:
                return DigitalMarketingOptions;
        }
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }, justifyContent: 'center', p: 0, m: 0, alignItems: 'center' }}>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
                <Typography component={Link} to="/" variant='h3' sx={{ flexGrow: 1, mx: 1, textDecoration: "none", cursor: "pointer", color: "black" }}>LOGO</Typography>
            </Box>
            <Box
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
            >
                <Button
                    sx={{ color: 'black' }}
                    endIcon={openServices ? <ExpandLess /> : <ExpandMore />}
                >
                    <b>Services</b>
                </Button>
                <Menu
                    anchorEl={anchorElServices}
                    open={openServices}
                    onClose={handleMouseLeaveServices}
                    MenuListProps={{
                        onMouseLeave: handleMouseLeaveServices,
                        sx: {
                            backgroundColor: 'primary.main',
                            textAlign: 'left',
                            color: 'black',
                            p: 0,
                            height: '100%',
                            justifyContent: 'space-evenly',
                            '& .MuiMenuItem-root': {
                                justifyContent: 'space-evenly',
                                backgroundColor: 'primary.main',
                                transition: 'all 0.2s ease-in-out',
                                textAlign: 'left',
                                p: 2,
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: 'black'
                                },
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'white',
                                    textAlign: 'left',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }
                                }
                            }
                        }
                    }}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            backgroundColor: 'primary.main',
                            textAlign: 'left',
                            color: 'white',
                            mt: 1.3,
                            ml: 35,
                            width: '70%',
                            p: 0
                        }
                    }}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: 368, p: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 0 }}>
                            <Box id='services' textAlign='left' sx={{ flex: 2, ml: 3, justifyContent: 'space-evenly', height: '100%', color: 'white', pt: 3, alignItems: 'left' }}>
                                {services.map((service) => (
                                    <MenuItem
                                        onMouseEnter={() => handleMouseEnterService(service)}
                                        onMouseLeave={handleMouseLeaveService}
                                        key={service}
                                        sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
                                    >
                                        <ListItemText textAlign={'left'} style={{ textAlign: "left" }}><b>{service}</b></ListItemText>
                                    </MenuItem>
                                ))}
                            </Box>
                            <Box sx={{ flex: 3, background: 'white', height: '100%', pt: 6, pb: 2, pl: 3 }}>
                                <Grid container id='options' sx={{ height: '100%' }}>
                                    {currentService && getOptions(currentService).map((option, index) => (
                                        <Grid md={6} key={index} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                            <Box sx={{ display: 'flex' }}>
                                                {option.icon}
                                                <Typography variant='body2' component={Link} to={option.link} onClick={handleMouseLeaveServices} sx={{ color: 'black', textDecoration: 'none', cursor: 'pointer', ml: 1, '&:hover': { color: 'primary.main', textDecoration: 'underline' } }}>
                                                    <b>{option.label}</b>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F0F9FF', px: 7, py: 4, justifyContent: 'space-evenly', height: '100%', alignItems: 'center' }}>
                                {highlights.map(({ title, icon }) => (
                                    <Box
                                        key={title}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            p: 0,
                                            m: 0,
                                            width: '100%',
                                            color: 'primary.main',
                                            alignItems: 'center',
                                        }}>
                                        {icon}<Typography variant='h6' color={'black'} sx={{ ml: 1 }}>{title}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Menu>
            </Box>
            {pages.map((page) => (
                <Button sx={{ color: 'black', mx: 1 }} key={page} component={Link} to={page.link}>
                    <b>{page.label}</b>
                </Button>
            ))}
            <Box
                onMouseEnter={handleMouseEnterHire}
                onMouseLeave={handleMouseLeaveHire}
                textAlign={'center'}
            >
                <Button
                    sx={{ color: 'black', mx: 1 }}
                    endIcon={openHire ? <ExpandLess /> : <ExpandMore />}
                >
                    <b>Hire Now</b>
                </Button>
                <Menu
                    anchorEl={anchorElHire}
                    open={openHire}
                    onClose={handleMouseLeaveHire}
                    MenuListProps={{
                        onMouseLeave: handleMouseLeaveHire,
                        sx: {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            pb: 1,
                            justifyContent: 'space-evenly',
                            '& .MuiMenuItem-root': {
                                justifyContent: 'space-evenly',
                                backgroundColor: 'primary.main',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    color: 'black',
                                },
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: 'black',
                                    },
                                },
                            },
                        }
                    }}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            backgroundColor: 'primary.main',
                            color: 'white',
                        },
                    }}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                >
                    {hireOptions.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={handleMouseLeaveHire}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'white',
                                backgroundColor: 'primary.main',
                                mt: 1,
                            }}
                        >
                            {option}
                            <Divider sx={{ color: 'primary.main', border: '1px solid', width: '100%' }} />
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Button variant='contained' sx={{ mx: 1 }} onClick={handleOpen}>
                <b>Get A Free Quote</b>
            </Button>
            <RequestQuote open={open} onClose={handleClose} />
        </Box>
    );
}

export default DesktopView;
