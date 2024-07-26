import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQs = [
    {
        panelId: 'panel1',
        question: 'How to build a website for my business?',
        answer: 'Your business websites have the potential to make it beyond your physical outreach and gain monumental success on all forums, but they need to compete at some crucial baselines like picking a domain name, registering your business, finding a firm that shall design the website for you, discussing a smart content strategy, making it SEO Optimized, and staying updated on the latest trends etc.'
    },
    {
        panelId: 'panel2',
        question: 'How to get a website for my business?',
        answer: 'You can get a business website built by hiring a business web developer in your team, or you could reach out and outsource to another business web development team like ours. We recommend starting from the ground up to build authenticity. Go to website-building platforms like Wix, Weebly, and GoDaddy to get started.'
    },
    {
        panelId: 'panel3',
        question: 'Do I need a website for my business?',
        answer: 'Yes, all businesses, whether small or large, need an online space to jump-start their visibility and scalability. With no websites, these businesses risk losing their target consumer who searches online for services, which comprises more than 90% of today\'s practices.'
    },
    {
        panelId: 'panel4',
        question: 'What is the best website host for a small business?',
        answer: 'There are many website hosting services available in the market. However, our preferred choices are Bluehost, HostGator, and Web.com.'
    },
    {
        panelId: 'panel5',
        question: 'Why is a website important for a small business?',
        answer: 'Small businesses need websites to prove their credibility, have a strong online presence, and consumer reach with minimum investment. Small business web design gives them a competitive edge with large corporations\' websites.'
    },
    {
        panelId: 'panel6',
        question: 'Who can build a website for my business?',
        answer: 'Website development companies like ours can help all kinds of businesses create user-friendly and custom websites focused on elevating their social standing, brand image, and lead generation.'
    }
];

function FAQ() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

    return (
        <Container
            id="faq"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                Frequently Asked Questions
            </Typography>
            <Box sx={{ width: '100%' }}>
                {FAQs.map(({ panelId, question, answer }) => (
                    <Accordion
                        expanded={expanded === panelId}
                        onChange={handleChange(panelId)}
                        sx={{ mb: 2 }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panelId-content"
                            id="panelId-header"
                        >
                            <Typography variant='body2'><b>{question}</b></Typography>
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails>
                            <Typography
                                gutterBottom
                                sx={{ maxWidth: { sm: '100%', md: '80%' } }}
                            >
                                {answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
}

export default FAQ;
