import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.cjs.css';
import { cw, wd, dm, gd, md } from '../../assets/images';
import { Box, Typography, Button } from '@mui/material';

const Banners = [
    {
        image: cw,
        title: "SEO Content Writing",
        subtitle: "For our SEO content writing services,",
        description: "Get SEO content writing services from professional content writers. Our SEO content writing services include SEO-friendly content, blog writing, article writing, website content writing, and SEO copywriting services - for your business growth."
    },
    {
        image: wd,
        title: "Web Development",
        subtitle: "For our web development services,",
        description: "Revolutionizing website development services with innovative web developers. Presenting visually stunning responsive website design services - for e-commerce business, corporate, real estate, and WordPress website development services, financial and SEO services website development."
    },
    {
        image: dm,
        title: "Digital Marketing",
        subtitle: "For cheap digital marketing of your business/company,",
        description: "Propel your digital presence to a peak with professional digital marketing services, a marketing action plan, target marketing strategies, a cost-effective marketing budget, buyer personas, and marketing campaigns - Generates organic growth and target audience."
    },
    {
        image: gd,
        title: "Graphic Designing",
        subtitle: "For our graphic designing services,",
        description: "Looking for graphic design services by a creative graphic designer with cutting-edge graphic design software and branding services to craft breathtaking, aesthetic designs by our famous graphic designers."
    },
    {
        image: md,
        title: "Mobile App Development",
        subtitle: "For our mobile app development services,",
        description: "Transform mobile app development services to a premium level! With master brains of mobile app developers - Offering custom mobile app development services that leverage user friendly apps across all platforms."
    }
];

const Landing = () => {
    return (
        <Box>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={5}
                isPlaying={true}
                interval={3000}
            >
                <Slider style={{ width: "99vw", height: "100vh" }}>
                    {Banners.map((banner, index) => (
                        <Slide index={index} key={index}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-around', px: 6 }}>
                                <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' }, mx: 12 }}>
                                    <Typography variant="h2" component="h1" sx={{ color: "primary.main" }}>
                                        <b>{banner.title}</b>
                                    </Typography>
                                    <Typography variant="h2" component="h1" gutterBottom>
                                        <b>Services</b>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        {banner.description}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {banner.subtitle}
                                    </Typography>
                                    <Button variant="contained" sx={{ p: 2, mt: 2 }}>
                                        <b>Get A Quote</b>
                                    </Button>
                                </Box>
                                <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, mt: { xs: 2, md: 0 }, mx: 16 }}>
                                    <img src={banner.image} alt={banner.title} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            </Box>
                        </Slide>
                    ))}
                </Slider>
            </CarouselProvider>
        </Box>
    );
};

export default Landing;
