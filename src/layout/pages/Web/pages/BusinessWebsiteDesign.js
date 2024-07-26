import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Testimonials, Industries, BusinessPartner, FAQ } from '../../../';
import { react } from '../../../../assets';

const BusinessWebsiteDesign = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                py: 24,
                position: 'relative',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${react})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.2)',
                    zIndex: -1,
                }
            }}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ my: 2, maxWidth: '30%', textAlign: "center" }}><b>Business Website Company</b></Typography>
                <Typography gutterBottom sx={{ maxWidth: '45%', textAlign: 'center', my: 1 }}><b>Responsive Design | Lead Generation | Website Management</b></Typography>
                <Typography gutterBottom sx={{ maxWidth: '40%', textAlign: 'center', my: 1 }}>
                    Amplify your business websites with our in-house experts who possess high-performing development expertise. Boost your brand recognition and sales by working with our business website company that will accompany you to your success.
                </Typography>
                <Button variant="contained" size="large" sx={{ my: 2 }}>Request A Quote</Button>
            </Box>
            <BusinessPartner />
            <Testimonials />
            <Industries />
            <FAQ />
        </Box>
    );
};

export default BusinessWebsiteDesign;
