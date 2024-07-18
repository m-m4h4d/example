import React from 'react';
import { Box, Container, Typography, Button, Paper, Avatar, Card, CardHeader, CardContent } from '@mui/material';
import { agile } from '../assets';

const Testimonials = [
    {
        name: 'Matt Wittey, Austria',
        text: '"It was a thrilling experience with Web Digital Sphere for their amazing and advantageous graphic design services. They amazed me with their on-time delivery, creative graphic designs. and pondering of descriptions. I\'d be delighted for future collaborations with you guys for more digital graphic designs!"'
    },
    {
        name: 'Shirley Johnson, New York',
        text: '"Web Digital Sphere has played a key role in my business\'s digital presence with its smart marketing tactics. I can rely on them for long-lasting business profits!"'
    },
    {
        name: 'Sam Wilson, Finland',
        text: '"I rely on Web Digital Sphere for extending my small mobile app development agency into a company providing custom mobile app development services with enterprise solutions!"'
    }
]

const Hero = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: 12 }}>
            <Container sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ my: 4 }}>
                    <b>Testimonials</b>
                </Typography>
                <Paper sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '60%', boxShadow: 'none', flexDirection: 'column', borderRadius: 8 }}>
                    {Testimonials.map((testimonial, index) => (
                        <Card key={index} sx={{ display: 'flex', justifyContent: 'space-around', boxShadow: 'none', borderRadius: 6 }}>
                            <Box sx={{ pr: 8 }}>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        {testimonial.text}
                                    </Typography>
                                </CardContent>
                                <CardHeader title={testimonial.name} />
                            </Box>
                            <Avatar sx={{ width: 100, height: 100, right: 30, top: 20 }} />
                        </Card>
                    ))}
                </Paper>
            </Container>
            <Container maxWidth="md" sx={{ textAlign: 'center', py: 10, px: 0, mx: 0 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                    <Typography variant="h3" gutterBottom component="span" sx={{ color: 'black' }}><b>Our</b></Typography>
                    <b> Agile Development Strategy</b>
                </Typography>ٖ
                <img src={agile} alt="Agile Software Development" />
                <Typography variant="body2" component="p" sx={{ mt: 4 }}>
                    To benefit from our work ethics act now,
                </Typography>
                <Button variant="contained" color="primary" sx={{ height: 45, mt: 1 }}>
                    Get in Touch
                </Button>
            </Container>
        </Box>
    );
};

export default Hero;
