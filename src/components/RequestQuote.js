import React from 'react';
import { Box, Button, Grid, Typography, Modal, TextField, MenuItem } from '@mui/material';
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
};

const RequestQuote = (open, onClose) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
                        <Typography variant="h5"><b>Contact Information</b></Typography>
                        <Typography>You can reach us at:</Typography>
                        <Typography><b>+923139613696</b></Typography>
                        <Typography>info@webdigitalsphere.com</Typography>
                        <Typography>Monday - Sunday</Typography>
                        <Typography variant="h6" sx={{ mt: 4 }}><b>What Will Happen Next?</b></Typography>
                        <ul>
                            <li>We will reach out to you within 24 hours.</li>
                            <li>We will discuss your project and gather your requirements and business objectives.</li>
                            <li>Develop a proposal accordingly.</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ p: 2 }}>
                        <Typography variant="h4"><b>Request A Quote</b></Typography>
                        <Typography>Tell us about your business goals and we will contact you</Typography>
                        <TextField fullWidth label="Full name" margin="normal" />
                        <TextField fullWidth label="Email Address" margin="normal" />
                        <PhoneInput country={'us'} value={''} onChange={() => { }} inputStyle={{ width: '100%', marginTop: '16px', marginBottom: '8px' }} />
                        <TextField select fullWidth label="Country" margin="normal">
                            <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                        </TextField>
                        <TextField fullWidth label="About your project" multiline rows={4} margin="normal" />
                        <TextField select fullWidth label="Budget" margin="normal">
                            <MenuItem value="1000-10000">$1000 - $10,000</MenuItem>
                        </TextField>
                        <Box sx={{ border: '1px dashed grey', p: 2, textAlign: 'center', mt: 2 }}>
                            <Typography>Attach the files related to your idea</Typography>
                            <Button component="label" color="primary">
                                Upload a file
                                <input type="file" hidden />
                            </Button>
                            <Typography>Must be a PDF up to 10MB</Typography>
                        </Box>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RequestQuote;
