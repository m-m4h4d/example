import * as React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Typography, Box, Button, Menu, MenuItem, Divider, Container } from '@mui/material';
import Services from './Services';

const pages = ['About Us', 'Blogs', 'Career', 'Portfolio', 'Contact Us'];
const hireOptions = ['Digital Marketer', 'Graphic Designer', 'Web Developer', 'App Developer', 'Content Writer'];

function NavBar() {
    const [anchorElHire, setAnchorElHire] = React.useState(null);
    const openHire = Boolean(anchorElHire);

    const handleMouseEnterHire = (event) => {
        setAnchorElHire(event.currentTarget);
    };

    const handleMouseLeaveHire = () => {
        setAnchorElHire(null);
    };

    return (
        <AppBar sx={{ background: 'white', color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Container maxWidth='lg'>
                <Box
                    width={'100%'}
                    alignItems={'center'}
                    sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}
                >
                    <Typography variant='h3' sx={{ mx: { sm: 0, md: 1 } }}>LOGO</Typography>
                    <Services />
                    {pages.map((page) => (
                        <Button sx={{ color: 'black', mx: { sm: 0, md: 1 } }} key={page}><b>{page}</b></Button>
                    ))}
                    <Box
                        onMouseEnter={handleMouseEnterHire}
                        onMouseLeave={handleMouseLeaveHire}
                        textAlign={'center'}
                    >
                        <Button
                            sx={{ color: 'black', mx: { sm: 0, md: 1 } }}
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
                                    <Divider sx={{ color: 'primary.main', border: '1px solid', width: '100%', mx: { sm: 0, md: 1 } }} />
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Button variant='contained' sx={{ mx: { sm: 0, md: 1 } }}><b>Get A Free Quote</b></Button>
                </Box>
            </Container>
        </AppBar>
    );
}

export default NavBar;
