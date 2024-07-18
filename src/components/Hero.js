import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero = () => {
    return (
        <Box sx={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Your Title Here
                </Typography>
                <Typography variant="h5" component="p">
                    Your subtitle here
                </Typography>
                <Button variant="contained" color="primary">
                    Learn More
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;
