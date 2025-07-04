import React from 'react';
import { Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
    return (
        <Box sx={{ px: { md: 30, sm: 20, xs: 10 }, py: 12 }}>
            <Typography variant="h3" gutterBottom><b>Contact Us</b></Typography>
            <Typography gutterBottom>
                Strategically positioned to cater to the needs of emerging companies in a market-centered environment.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.7441100258538!2d72.9578780792184!3d33.64450947893183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df96381026fb8b%3A0x6500195867b615b6!2sShakeel%20Arcade%2C%2085%20Street%2085%2C%20G-13%2F1%20G%2013%2F1%20G-13%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721907405185!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        title="Map"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ mt: 2 }}><b>Get In Touch.</b></Typography>
                    <Typography gutterBottom>
                        We would be happy to answer your questions, fill out the form and we shall respond promptly.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" sx={{ my: 2 }}>
                        <TextField fullWidth label="Your Name" margin="normal" />
                        <TextField fullWidth label="Your Email" margin="normal" />
                        <TextField fullWidth label="Your Subject" margin="normal" />
                        <TextField
                            fullWidth
                            label="Add your message"
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
                            Send
                        </Button>
                    </Box>
                    <Paper elevation={4} sx={{ py: 4, my: 4 }}>
                        <Grid container spacing={4} sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Grid item md={6}>
                                <Typography ><b>ADDRESS</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    HCI Expert PVT LTD, Office # 8, Shakeel Arcade, Street # 85, Sector G-13/1, Islamabad, Capital Territory, Pakistan
                                </Typography>
                            </Grid>
                            <Grid item md={5}>
                                <Typography ><b>EMAIL</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    fakhar@hciexpert.com
                                </Typography>
                                <Typography ><b>PHONE</b></Typography>
                                <Typography variant='body2' gutterBottom>
                                    +92 300 5674006
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
