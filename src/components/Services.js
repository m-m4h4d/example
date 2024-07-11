import * as React from 'react';
import { ExpandMore, ExpandLess, EmojiObjectsOutlined, VerifiedOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { Box, Button, Typography, Grid } from '@mui/material';

const services = ['Digital Marketing', 'Graphic Designing', 'Web Development', 'Mobile Development', 'SEO Content Writing'];
const DigitalMarketingOptions = ['Social Media Marketing', 'Affiliate Marketing', 'Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)'];
const GraphicDesigningOptions = ['Logo And Brand Identity', 'Web And App Design', 'Visual Design', 'Marketing Design'];
const WebDevelopmentOptions = ['Business Website Design', 'ECommerce Web Design And Development', 'Landing Page Design', 'Dropshipping Website', 'Custom Web Development Services', 'Platform Design'];
const MobileDevelopmentOptions = ['Android App Development', 'IOS App Development'];
const SEOContentWritingOptions = ['Technical Writing Services', 'Research and Analysis', 'Elearning Content'];
const highlights = [['7+ Years Of Excellence', <VerifiedOutlined fontSize='large' />], ['1000+ Projects Delivered', <PhoneAndroidOutlined fontSize='large' />], ['200+ Technology Experts', <EmojiObjectsOutlined fontSize='large' />]];

const Services = () => {
    const [anchorElServices, setAnchorElServices] = React.useState(null);
    const openServices = Boolean(anchorElServices);
    const [anchorElDM, setAnchorElDM] = React.useState(null);
    const openDM = Boolean(anchorElDM);

    const handleMouseEnterServices = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleMouseLeaveServices = () => {
        setAnchorElServices(null);
    };

    const handleMouseEnterDM = (event) => {
        setAnchorElDM(event.currentTarget);
    };

    const handleMouseLeaveDM = () => {
        setAnchorElDM(null);
    };

    return (
        <Box
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
            textAlign={'center'}
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
                        color: 'black',
                        p: 0,
                        height: '100%',
                        justifyContent: 'space-evenly',
                        '& .MuiMenuItem-root': {
                            justifyContent: 'space-evenly',
                            backgroundColor: 'primary.main',
                            transition: 'all 0.2s ease-in-out',
                            p: 2,
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'black'
                            },
                            '&.Mui-focusVisible': {
                                backgroundColor: 'white',
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
                        color: 'white',
                        mt: 2.3,
                        ml: 35,
                        width: '70%',
                        p: 0
                    }
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: 368 , p: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 0 }}>
                        <Box id='services' sx={{ flex: 2, ml: 3, justifyContent: 'space-evenly', height: '100%', color: 'white', pt: 3 }}>
                            {services.map((service) => (
                                <MenuItem
                                    onMouseEnter={handleMouseEnterDM}
                                    onMouseLeave={handleMouseLeaveDM}
                                    key={service}>
                                    <b>{service}</b>
                                </MenuItem>
                            ))}
                        </Box>
                        <Box  sx={{ flex: 3, background: 'white', height: '100%', pt: 6, pb: 2, px: 2 }}>
                            <Grid container id='options'  sx={{ height: '100%' }}>
                                {WebDevelopmentOptions.map((option) => (
                                    <Grid md={6} sx={{ cursor: 'pointer' }}>
                                        <Typography variant='body2' key={option}>{option}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F0F9FF', px: 7, py: 4, justifyContent: 'space-evenly', height: '100%', alignItems: 'center' }}>
                            {highlights.map(([title, icon]) => (
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
                                    {icon}<Typography variant='h6' color={'black'} sx={{ ml: 1.5 }}>{title}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Menu>
        </Box>
    );
};

export default Services;
