import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box, Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';

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

export default class Testimonials extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                isPlaying={true}
                interval={3000}
                style={{ background: '#F0F9FF' }}
            >
                <Typography variant='h3' textAlign={'center'} sx={{ my: 4 }}>
                    <b>Testimonials</b>
                </Typography>
                <Slider style={{ height: 200, width: 1000 }}>
                    <Slide index={0}>
                        <Card sx={{ display: 'flex', justifyContent: 'space-around', borderRadius: 6, m: 1 }}>
                            <Box sx={{ pr: 4 }}>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        "It was a thrilling experience with Web Digital Sphere for their advantageous and amazing graphic design services. They amazed me with their on-time delivery, creative graphic designs. and pondering of descriptions. I'd be delighted for future collaborations with you guys for more digital graphic designs!"
                                    </Typography>
                                </CardContent>
                                <CardHeader title={'Matt Wittey, Austria'} />
                            </Box>
                            <Avatar {...stringAvatar('Matt Wittey, Austria')} sx={{ width: 100, height: 100, right: 30, top: 20, bgcolor: stringToColor('Matt Wittey, Austria') }} />
                        </Card>
                    </Slide>
                    <Slide index={1}>
                        <Card sx={{ display: 'flex', justifyContent: 'space-around', borderRadius: 6, m: 1 }}>
                            <Box sx={{ pr: 4 }}>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        "Web Digital Sphere has played a key role in my business's digital presence with its smart marketing tactics. I can rely on them for long-lasting business profits!"
                                    </Typography>
                                </CardContent>
                                <CardHeader title={'Shirley Johnson, New York'} />
                            </Box>
                            <Avatar {...stringAvatar('Shirley Johnson, New York')} sx={{ width: 100, height: 100, right: 30, top: 20, bgcolor: stringToColor('Shirley Johnson, New York') }} />
                        </Card>
                    </Slide>
                    <Slide index={2}>
                        <Card sx={{ display: 'flex', justifyContent: 'space-around', borderRadius: 6, m: 1 }}>
                            <Box sx={{ pr: 4 }}>
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        "I rely on Web Digital Sphere for extending my small mobile app development agency into a company providing custom mobile app development services with enterprise solutions!"
                                    </Typography>
                                </CardContent>
                                <CardHeader title={'Sam Wilson, Finland'} />
                            </Box>
                            <Avatar {...stringAvatar('Sam Wilson, Finland')} sx={{ width: 100, height: 100, right: 30, top: 20, bgcolor: stringToColor('Sam Wilson, Finland') }} />
                        </Card>
                    </Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}
