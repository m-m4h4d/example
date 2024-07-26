import React from 'react';
import { Box, Button, Grid, Typography, Modal, TextField, MenuItem } from '@mui/material';
import { PhoneOutlined, EmailOutlined, CalendarMonthOutlined } from '@mui/icons-material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    borderRadius: 4
};

const RequestQuote = (open, onClose) => {
    console.log(open, onClose);
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
                        <Typography variant="h3" gutterBottom><b>Contact Information</b></Typography>
                        <Typography gutterBottom>You can reach us at:</Typography>
                        <Box sx={{ display: "flex" }}>
                            <PhoneOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>+92 300 5674006</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <EmailOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>fakhar@hciexpert.com</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <CalendarMonthOutlined sx={{ mx: 1 }} />
                            <Typography gutterBottom>Monday - Friday</Typography>
                        </Box>
                        <Typography variant="h4" sx={{ mt: 4 }}><b>What Will Happen Next?</b></Typography>
                        <Typography>
                            <ul>
                                <li>We will reach out to you within 24 hours.</li>
                                <li>We will discuss your project and gather your requirements and business objectives.</li>
                                <li>Develop a proposal accordingly.</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ p: 2 }}>
                        <Typography variant="h4"><b>Request A Quote</b></Typography>
                        <Typography>Tell us about your business goals and we will contact you</Typography>
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth label="Full name" margin="normal" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth required label="Email Address" margin="normal" />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <PhoneInput required country={'us'} value={''} onChange={() => { }} inputStyle={{ width: '100%', marginTop: '16px', marginBottom: '8px' }} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField required fullWidth label="About your project" multiline rows={4} margin="normal" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select fullWidth label="Budget" margin="normal">
                                    <MenuItem value="1000-10000">$1000 - $10,000</MenuItem>
                                    <MenuItem value="10000-50000">$10,000 - $50,000</MenuItem>
                                    <MenuItem value="50000-100000">$50,000 - $100,000</MenuItem>
                                    <MenuItem value="100000-1000000">$100,000 - $1,000,000</MenuItem>
                                    <MenuItem value="Discuss">Discuss</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select fullWidth label="Country" margin="normal">
                                    <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box sx={{ border: '1px dashed grey', p: 2, textAlign: 'center', mt: 2 }}>
                                    <Typography><b>Attach the files related to your idea</b></Typography>
                                    <Button component="label" color="primary">
                                        Upload a file
                                        <input type="file" hidden />
                                    </Button>
                                    <Typography>Must be a PDF up to 10MB</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RequestQuote;
