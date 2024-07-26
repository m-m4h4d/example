import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Tri, TestingStage, RequirementsCollection, Prototype, IdentifyingTargetAudience, DiscussingWebDesignStrategy, DeploymentAndLaunch, DebuggingAndFeedbackMonitoring, BudgetPlanning } from '../../assets';

const steps = [
    { id: 1, title: "Requirements Collection", icon: <RequirementsCollection height={60} />, description: "Identifying the vision and business needs of the company, we plan the key features and functionalities like web portfolio, product and service listing, job listing, online application, and event calendar. By requirements gathering, we can discuss its feasibility with the developers and designers team and how long it shall take to go live." },
    { id: 2, title: "Identifying Target Audience", icon: <IdentifyingTargetAudience height={60} />, description: "By careful examination, we help indicate your targeted visitors who will be interested in doing business with you. This breaks down the objectives for our business website developer team and how they should approach your project." },
    { id: 3, title: "Budget Planning", icon: <BudgetPlanning height={60} />, description: "After compiling and presenting the business scope, we invoice for comprehensive staff and resources allocated. We offer some of the best web design pricing packages that are highly economical for all businesses." },
    { id: 4, title: "Discussing Web Design Strategy", icon: <DiscussingWebDesignStrategy height={60} />, description: "The next phase is the tone and theme of your business in the online world which needs to be defined first. Developers start by working on the business website themes and their variations for home pages and landing pages. We devise your Website Content strategy that best reflects your brand and stands in line with the purpose of your online existence." },
    { id: 5, title: "Prototype", icon: < Prototype height={60} />, description: "After choosing the best framework that operates well for your business and is flexible to changes, a website prototype arises. We make sure it can scale to match the growth potential of your business. This step involves rigorous front and back-end development activities. A sample business website gives you much clarity on your end goals and how it shall perform when launched." },
    { id: 6, title: "Testing Stage", icon: <TestingStage height={60} />, description: "After rigorous changes, the website is passed through a series of web testing frameworks, including Functionality Testing, Usability Testing, Compatibility Testing, Cross-Browser Testing, Responsive Testing, Accessibility Testing, Performance Testing, and User Acceptance Testing (UAT)." },
    { id: 7, title: "Deployment & Launch", icon: <DeploymentAndLaunch height={60} />, description: "In this final stage of website deployment, we will move it to a secure and highly scalable server. We incorporate approved changes to all website pages, and we then launch the final site into the online market including automatic backups, monitoring, and an appropriate SSL certificate." },
    { id: 8, title: "Debugging & Feedback Monitoring", icon: <DebuggingAndFeedbackMonitoring height={60} />, description: "When the business sites are launched, we observe their performance for a few weeks and how well they are perceived by the users. If they are adaptive websites, they are prone to change and have room for improvement. The team tasked with website monitoring, maintenance, support, optimization, and documentation, makes sure the website runs smoothly and is accessible to end users. The respective changes are made in place without compromising business goals." },
];

const Workflow = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    return (
        <Box sx={{ background: '#F0F9FF', py: 6, m: 0, width: '100%', alignItems: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ my: 4 }}><b>Business Website WorkFlow</b></Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ width: '80%', alignItems: "start", display: { xs: "none", sm: "none", md: "none", lg: "flex" }, justifyContent: "center" }}>
                {steps.map((step) => (
                    <Grid item lg={3} key={step.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: 450 }}>
                        <Paper elevation={0} sx={{ borderRadius: 99, width: "fit-content", px: 3, py: 2, mx: 0, my: 1, border: "3px dashed lightblue" }}>
                            <Typography><b>{step.id}</b></Typography>
                        </Paper>
                        <Tri height={30} fill='lightblue' />
                        <Paper
                            elevation={3}
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                            sx={{
                                mt: 0,
                                p: 2,
                                textAlign: 'center',
                                backgroundColor: 'background.paper',
                                transition: 'width 0.6s ease-in-out',
                                width: '40%',
                                '&:hover': {
                                    width: '80%',
                                }
                            }}
                        >
                            {step.icon}
                            <Typography>{step.title}</Typography>
                            {hoveredStep === step.id && step.description && (
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {step.description}
                                </Typography>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} justifyContent="center" sx={{ width: '80%', alignItems: "start", display: { xs: "flex", sm: "flex", md: "flex", lg: "none" }, justifyContent: "center", height: "100%" }}>
                {steps.map((step) => (
                    <Grid item xs={12} sm={6} md={4} key={step.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                        <Paper
                            elevation={3}
                            sx={{
                                mt: 0,
                                p: 2,
                                textAlign: 'center',
                                height: "100%",
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            {step.icon}
                            <Typography><b>{step.id}. {step.title}</b></Typography>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                {step.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Workflow;
