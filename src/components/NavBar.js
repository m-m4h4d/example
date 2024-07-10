import * as React from 'react';
import { ExpandLess, ExpandMore, EmojiObjectsOutlined, VerifiedOutlined, PhoneAndroidOutlined } from '@mui/icons-material';
import { AppBar, Typography, Box, Button, Menu, MenuItem, Divider } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];
const services = ['Digital Marketing', 'Graphic Designing', 'Web Development', 'Mobile Development', 'SEO Content Writing'];
const DMoptions = ['Social Media Marketing', 'Affiliate Marketing', 'Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)'];
const highlights = [['7+ Years Of Excellence', <VerifiedOutlined fontSize='large' />], ['1000+ Projects Delivered', <PhoneAndroidOutlined fontSize='large' />], ['200+ Technology Experts', <EmojiObjectsOutlined fontSize='large' />]];

function NavBar() {
    const [anchorElServices, setAnchorElServices] = React.useState(null);
    const [anchorElHire, setAnchorElHire] = React.useState(null);
    const openServices = Boolean(anchorElServices);
    const openHire = Boolean(anchorElHire);

    const handleMouseEnterServices = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleMouseLeaveServices = () => {
        setAnchorElServices(null);
    };

    const handleMouseEnterHire = (event) => {
        setAnchorElHire(event.currentTarget);
    };

    const handleMouseLeaveHire = () => {
        setAnchorElHire(null);
    };

    return (
        <AppBar sx={{ background: 'white', color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Box
                width={'70%'}
                alignItems={'center'}
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
                <Typography variant='h2'>LOGO</Typography>
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: 368 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ flex: 2, ml: 4, justifyContent: 'space-evenly', height: '100%', color: 'white', pt: 3 }}>
                                    {services.map((service) => (
                                        <MenuItem key={service}><b>{service}</b></MenuItem>
                                    ))}
                                </Box>
                                <Box sx={{ flex: 3, background: 'white', height: '100%', py: 4 }}>
                                    {DMoptions.map((option) => (
                                        <Typography key={option}>{option}</Typography>
                                    ))}
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
                                            {icon}<Typography variant='h6' color={'black'} sx={{ ml: 2 }}>{title}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Menu>
                </Box>
                {pages.map((page) => (
                    <Button sx={{ color: 'black' }} key={page}><b>{page}</b></Button>
                ))}
                <Box
                    onMouseEnter={handleMouseEnterHire}
                    onMouseLeave={handleMouseLeaveHire}
                    textAlign={'center'}
                >
                    <Button
                        sx={{ color: 'black' }}
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
                                        color: 'black'
                                    },
                                    '&.Mui-focusVisible': {
                                        backgroundColor: 'primary.main',
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
                                color: 'white'
                            }
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
                                    mt: 1
                                }}
                            >
                                {option}
                                <Divider sx={{ color: 'primary.main', border: '1px solid', width: '100%' }} />
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Button variant='contained'><b>Get A Free Quote</b></Button>
            </Box>
        </AppBar>
    );
}

export default NavBar;
