import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { SME, Agencies, Startups, Enterprise } from '../assets/svg';
import { agencies, enterprises, startup, mediumnsmall } from '../assets/images';

const partners = [
    {
        image: <Enterprise />,
        title: 'Enterprise',
        icon: enterprises,
    },
    {
        image: <Agencies />,
        title: 'Agencies',
        icon: agencies,
    },
    {
        image: <Startups />,
        title: 'Startups',
        icon: startup,
    },
    {
        image: <SME />,
        title: 'SMEs',
        icon: mediumnsmall,
    },
]

const Partners = () => {
    return (
        <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h3" component="h1" gutterBottom>
                <b>We Work With The Best Partners</b>
            </Typography>ٖ
            <Grid container spacing={4} sx={{ width: '80%' }}>
                {partners.map((partner, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <Box sx={{ py: 6, display: 'flex', flexDirection: 'column', textAlign: 'center', borderRadius: 4 }}>
                            <img src={partner.icon} alt={partner.title} style={{ objectFit: 'contain', width: '100%', borderRadius: 19 }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 2 }}>
                                {partner.image}
                                <Typography variant="h6" sx={{ mx: 2 }}>
                                    {partner.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Partners;
