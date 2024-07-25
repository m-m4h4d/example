import React from 'react';
import { Typography, Box } from '@mui/material';

const Contact = () => {
    return (
        <Box>
            <Typography variant="h3">Contact Us</Typography>
            <Typography>
                Strategically positioned to cater to the needs of emerging companies in a market-centered environment.
            </Typography>
            <Typography>
                <a href="mailto:info@example.com">info@example.com</a>
            </Typography>
            <Typography>
                <a href="tel:+1-123-456-7890">+1-123-456-7890</a>
            </Typography>
            <Typography>
                <a href="https://example.com/location">https://example.com/location</a>
            </Typography>
        </Box>
    );
};

export default Contact;
