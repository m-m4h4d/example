import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { agile } from '../../assets';

const Strategy = () => {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 10, px: 0, mx: 0 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                <Typography variant="h3" gutterBottom component="span" sx={{ color: 'black' }}><b>Our</b></Typography>
                <b> Agile Development Strategy</b>
            </Typography>ٖ
            <img src={agile} alt="Agile Software Development" style={{ width: '100%' }} />
            <Typography variant="body2" component="p" sx={{ mt: 4 }}>
                To benefit from our work ethics act now,
            </Typography>
            <Button variant="contained" color="primary" sx={{ py: 1.5, mt: 1 }}>
                Get in Touch
            </Button>
        </Container>
    );
};

export default Strategy;
