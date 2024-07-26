import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BusinessPartner } from './';
import { heronasa, image, plan, reach } from '../assets/images';

const items = [
    {
        image: image,
        title: "Who We Are?",
        description: "Each team of experts is highly adept at its craft and works round-the-clock to provide satisfying solutions.\nWith master-class expertise in web technologies and frameworks, we help you design some of the most high-performing websites that have a commercial appeal. We have keenly observed the changes in the technology landscape over the years, and we are constantly evolving with each latest update. Allowing us to deliver time-efficient solutions with powerful and engaging applications.\nDigital Marketing experts have this subtle approach toward your brand promotion and visibility, without having to shove a hundred ads on somebody' face. We know that the best marketing doesn't feel like marketing. We come up with the most brilliant content strategies with our copywriting experts that guide the user's eye on your pre-determined path.\nOur custom solutions are backed by meticulous research and analysis, because your other competitors are just one click away, from stealing your audience. So we pour all our creativity and resources into shaping your business as a customer magnet."
    },
    {
        image: reach,
        title: "Our Mission",
        description: `WebDigitalSphere plans to be a game-changer in marketing & tech solutions, and we don't just want to tell you, we want to show you. The world of technology is still vast and expandable, and we dedicate ourselves to being the best contributors to tech solutions.`
    },
    {
        image: plan,
        title: "Our Plan",
        description: `WebDigitalSphere plans to be the top-scoring marketplace with its growing strength of solution providers and consumer base. We plan to further diversify our line of services to reach the maximum audience. Our vision lies in absolute customer satisfaction, global collaborations, and innovation. WebDigitalSphere plans to keep up and lead in modern e-commerce and tech solutions.`
    }
];

const About = () => {
    const [index, setIndex] = React.useState(0);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', my: 0, py: 0 }}>
            <Grid container spacing={0} sx={{ width: '100%', alignItems: "center", my: 0, py: 0 }}>
                <Grid item sm={12} md={6} sx={{ px: { md: 32, xs: 4 }, py: 0, my: 0 }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        <b>About Us</b>
                    </Typography>
                    <Typography sx={{ mb: 4 }}>
                        WebDigitalSphere is an emerging IT-powered digital solutions provider, with strategies that are tailored to client's needs and goals. With a concentrated team of marketing experts, developers, writers & designers who work collaboratively to deliver revenue-generating outcomes.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6} sx={{ py: 0, my: 0 }}>
                    <img src={heronasa} alt="Hero NASA" style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <Box sx={{ width: "100%", my: 0, py: 0 }}>
                <Box sx={{ height: "auto", bgcolor: "primary.main", width: "100%", display: "flex", justifyContent: "space-evenly", my: 0, py: 0 }}>
                    {items.map((item, i) => (
                        <Typography
                            variant="h5"
                            key={i}
                            onClick={() => setIndex(i)}
                            sx={{
                                color: "white",
                                cursor: "pointer",
                                textDecoration: i === index ? "underline" : "none",
                                '&:hover': { textDecoration: "underline" },
                                my: 0,
                                py: 0
                            }}>
                            <b>{item.title}</b>
                        </Typography>
                    ))}
                </Box>
                <Box key={index} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 8,
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
                        backgroundImage: `url(${items[index].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.1)',
                        zIndex: -1,
                    }
                }}>
                    <Typography variant="h4" component="h2" sx={{ my: 2 }}><b>{items[index].title}</b></Typography>
                    <Typography sx={{ maxWidth: '45%', textAlign: 'center' }}>{items[index].description}</Typography>
                </Box>
            </Box>
            <Box sx={{ background: "#F0F9FF", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 8, my: 0 }}>
                <Box sx={{ width: "70%", my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom><b>What We Do?</b></Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Typography gutterBottom>
                        Our team of diligent in-house experts provides optimal and satisfying solutions to our clients.
                        <br /><br />
                        We work with the latest tech stack to harness the full potential of your websites and applications. And we don't just build websites, we build websites that sell. After a decade of working with prominent productive environments, we have come up with the best-performing strategies for your digital marketing, website SEO optimizations, responsiveness, and marketing designs. We are manifesting excellent workflow, development, and content strategy that promotes your brand 24/7. No amount of employees can help you achieve the level of visibility and engagement like we do.
                        <br /><br />
                        Having deployed all sorts of custom mobile applications for iOS and Android, we have amassed a rich portfolio in all software development platforms like Flutter, React Native, and AR/VR amongst several others. Developers who are driven by excellence, deliver your applications in a timely and budget-friendly manner. Working in close collaboration with designers, we make selling designs for your marketing campaigns, websites, and applications. Experts provide detailed consultation for targeting local and global audiences whether it is designs, visuals, applications, or quality content.
                    </Typography>
                </Box>
            </Box>
            <BusinessPartner />
            <Box sx={{ background: "#F0F9FF", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 8, my: 0 }}>
                <Box sx={{ width: "70%", my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom><b>Awards & Recognitions</b></Typography>
                </Box>
                <Box sx={{ width: "50%" }}>
                    <Typography gutterBottom>
                        WebDigitalSphere has collected dozens of prominent awards and recognitions by working with reputed companies. We carry a tradition of excellence in SEO, Website innovation, design supremacy, and top-notch quality content.
                        <br /><br />
                        Here is our list of local and global recognitions:
                        <br />
                        <ul>
                            <li>Business Excellence (800+ clients satisfied)</li>
                            <li>Top growing SEO company</li>
                            <li>Fastest-growing SEO and marketing company (20+ countries worldwide)</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
