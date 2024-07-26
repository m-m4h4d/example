import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.cjs.css';
import { Box, Paper, Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';

const Testimonies = [
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

const Testimonials = () => {
    return (
        <Box sx={{ background: '#F0F9FF', py: 6, m: 0, width: '100%' }}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                isPlaying={true}
                interval={3000}
                style={{ bgcolor: '#F0F9FF' }}
            >
                <Typography variant='h3' textAlign={'center'} sx={{ my: 4 }}>
                    <b>Testimonials</b>
                </Typography>
                <Paper
                    elevation={0}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        bgcolor: 'inherit',
                        width: '100%'
                    }}>
                    <Slider style={{ height: 300, width: 750 }}>
                        {Testimonies.map((testimonial, index) => (
                            <Slide index={index} key={index}>
                                <Card sx={{ display: 'flex', justifyContent: 'space-around', borderRadius: 6, m: 1 }}>
                                    <Box sx={{ pr: 8 }}>
                                        <CardContent>
                                            <Typography variant="body1" component="p">
                                                {testimonial.text}
                                            </Typography>
                                        </CardContent>
                                        <CardHeader title={testimonial.name} />
                                    </Box>
                                    <Avatar
                                        {...stringAvatar(testimonial.name)}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            right: 30,
                                            top: 20,
                                            bgcolor: stringToColor(testimonial.name)
                                        }} />
                                </Card>
                            </Slide>
                        ))}
                    </Slider>
                </Paper>
            </CarouselProvider>
        </Box>
    );
};

export default Testimonials;
