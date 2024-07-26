import React from 'react';
import { Box } from '@mui/material';
import { Industries, Partners, Strategy, Testimonials, DigiBusiness, BusinessPartner, Landing } from '..';

const Hero = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: 12 }}>
            <Landing />
            <Partners />
            <BusinessPartner />
            <DigiBusiness />
            <Strategy />
            <Industries />
            <Testimonials />
        </Box>
    );
};

export default Hero;
