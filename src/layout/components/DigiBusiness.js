import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { w, imageicon, WebDesignServices, GraphicDesignServices, MarketingServices } from '../../assets';

const DigiBusiness = () => {
    return (
        <>
            <style>
                {`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg) scale(0.8);
                    }
                    50% {
                        transform: rotate(180deg) scale(0.5);
                    }
                    to {
                        transform: rotate(360deg) scale(0.8);
                    }
                }
            `}
            </style>
            <Box sx={{ background: '#F0F9FF', width: '100%', py: 6, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h3" textAlign="center" component="h1" gutterBottom sx={{ color: 'primary.main', width: '40%' }}>
                    <b>How We Run</b>
                    <Typography variant="h3" textAlign="center" gutterBottom component="span" sx={{ color: 'black' }}>
                        <b> Your Digital Businesses</b>
                    </Typography>
                </Typography>
                <Grid container spacing={6} sx={{ px: 12 }}>
                    <Grid item sm={12} md={6}>
                        <Box sx={{ mx: 8, my: 4 }}>
                            <Typography variant="h6" sx={{ mb: 4 }}>
                                “Driving Down The Road Business Growth”
                            </Typography>
                            <Typography variant="body1" sx={{ width: '60%', mb: 4 }}>
                                Are you up to a digital strategy with digital branding services that gather, inspire, and generate leads? Webdigitalspere is taking your digital businesses to the next tier. Boost your revenue with an unbeatable, unique, and experienced business partner you will find once in a blue moon!
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                <b>Uplifting Your Online Business Through:</b>
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', mb: 2, justifyContent: 'space-evenly', width: '50%' }}>
                                    <WebDesignServices sx={{}} />
                                    <Typography variant="body1" sx={{ ml: 4, width: '80%' }}>
                                        Web design services for small businesses to enterprise website development services
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 2, justifyContent: 'space-evenly', width: '50%' }}>
                                    <GraphicDesignServices sx={{}} />
                                    <Typography variant="body1" sx={{ ml: 4, width: '80%' }}>
                                        Full range graphic design and branding services
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mb: 2, justifyContent: 'space-evenly', width: '50%' }}>
                                    <MarketingServices sx={{}} />
                                    <Typography variant="body1" sx={{ ml: 4, width: '80%' }}>
                                        Professional marketing services for digital solutions
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" sx={{ mt: 4 }}>
                                To get our services now,
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                                Get In Touch
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                            <img src={w} alt="w" style={{ position: 'absolute' }} />
                            <img src={imageicon} alt="imageicon" style={{ animation: 'rotate 10s linear infinite', transformOrigin: 'center', transform: 'scale(0.8)' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default DigiBusiness;
