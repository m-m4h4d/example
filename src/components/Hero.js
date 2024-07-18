import React from 'react';
import { Box, Container, Typography, Button, Paper, Avatar, Card, CardHeader, CardContent, Grid } from '@mui/material';
import { agile, ecommerce, education, food, gaming, health, logistics, realestate, social, solutions, travel, enterprises, Enterprise, SME, mediumnsmall, agencies, Agencies, startup, Startups } from '../assets';

const Partners = [
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

const Industries = [
    {
        icon: ecommerce,
        title: 'Retail / Ecommerce',
    },
    {
        icon: education,
        title: 'Education & e-learning',
    },
    {
        icon: food,
        title: 'Food & Restaurant',
    },
    {
        icon: gaming,
        title: 'Gaming',
    },
    {
        icon: realestate,
        title: 'Real Estate',
    },
    {
        icon: health,
        title: 'Health & Fitness',
    },
    {
        icon: logistics,
        title: 'Logistics & Distribution',
    },
    {
        icon: social,
        title: 'Social Networking',
    },
    {
        icon: solutions,
        title: 'On Demand Solutions',
    },
    {
        icon: travel,
        title: 'Travel & Hospitality',
    }
]

function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `${value.toString(16)}`;
    }

    return color;
}

function stringAvatar(name) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Hero = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: 12 }}>

            <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    <b>We Work With The Best Partners</b>
                </Typography>ٖ
                <Grid container spacing={4} sx={{ width: '80%' }}>
                    {Partners.map((partner, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Box sx={{ py: 6, display: 'flex', flexDirection: 'column', textAlign: 'center', borderRadius: 4 }}>
                                <img src={partner.icon} alt={partner.title} style={{ objectFit: 'contain', width: '100%', borderRadius: 19 }} />
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mt: 2}}>
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

            <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'primary.main' }}>
                    <Typography variant="h3" gutterBottom component="span" sx={{ color: 'black' }}><b>Industries</b></Typography>
                    <b> We Work In</b>
                </Typography>ٖ
                <Grid container spacing={4} columns={15} sx={{ width: '80%' }}>
                    {Industries.map((industry, index) => (
                        <Grid item key={index} xs={15} sm={7} md={3}>
                            <Card sx={{ px: 8, py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', height: '40%', borderRadius: 4 }}>
                                <img src={industry.icon} alt={industry.title} style={{ objectFit: 'contain', height: 50 }} />
                                <Typography variant="h6" sx={{ mt: 2 }}>
                                    {industry.title}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ background: '#F0F9FF', py: 6, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Typography variant='h3' sx={{ my: 4 }}>
                    <b>Testimonials</b>
                </Typography>
                <Paper sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: '40%', flexDirection: 'column', borderRadius: 8, backgroundColor: 'primary.main' }}>
                    {Testimonials.map((testimonial, index) => (
                        <Card key={index} sx={{ display: 'flex', justifyContent: 'space-around', borderRadius: 6, m: 1 }}>
                            <Box sx={{ pr: 8 }}>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        {testimonial.text}
                                    </Typography>
                                </CardContent>
                                <CardHeader title={testimonial.name} />
                            </Box>
                            <Avatar {...stringAvatar(testimonial.name)} sx={{ width: 100, height: 100, right: 30, top: 20, bgcolor: stringToColor(testimonial.name) }} />
                        </Card>
                    ))}
                </Paper>
            </Box>

        </Box>
    );
};

export default Hero;
