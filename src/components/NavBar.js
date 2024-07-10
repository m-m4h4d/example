import * as React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Typography, Box, Button, Menu, MenuItem, Divider, Paper } from '@mui/material';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];

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
                        <Paper>
                            <img src="/mnt/data/Screenshot 2024-07-10 151717.png" alt="Services" width="600" />
                        </Paper>
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
