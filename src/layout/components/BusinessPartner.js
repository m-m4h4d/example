import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const BusinessPartner = () => {
    return (
        <Box sx={{ width: '100%', py: 6, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: 12 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                <b>Choose Us As A Business Partner</b>
            </Typography>ٖ
            <Grid container spacing={0} sx={{ width: '80%' }}>
                <Grid item sm={12} md={4}>
                    <Paper sx={{ p: 4, borderRadius: 0, height: '100%' }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            "Turning Ideas Into Businesses"
                        </Typography>
                        <Typography variant="body2">
                            Tackling your business bottlenecks with the top business branding services through organic traffic - to generate leads and a full conversion funnel with organic ranking. Stay entrusted with us for acquiring business solutions with profits and budget-friendly services.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper elevation={0} sx={{ pt: 4, pb: 2, borderRadius: 0, bgcolor: '#F0F9FF', height: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", my: 0 }}>
                        <Typography variant="h2" component="h2" sx={{ color: "primary.main" }}>1000+</Typography>
                        <Typography variant="body2">Project Delivered</Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper sx={{ pt: 4, pb: 2, borderRadius: 0, height: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", my: 0 }}>
                        <Typography variant="h2" component="h2" sx={{ color: "primary.main" }}>800+</Typography>
                        <Typography variant="body2">Clients Satisfied</Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper elevation={0} sx={{ pt: 4, pb: 2, borderRadius: 0, bgcolor: '#F0F9FF', height: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", my: 0 }}>
                        <Typography variant="h2" component="h2" sx={{ color: "primary.main" }}>07+</Typography>
                        <Typography variant="body2">Years Experience</Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper sx={{ pt: 4, pb: 2, borderRadius: 0, height: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", my: 0 }}>
                        <Typography variant="h2" component="h2" sx={{ color: "primary.main" }}>20+</Typography>
                        <Typography variant="body2">Countries Served</Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper elevation={0} sx={{ pt: 4, pb: 2, borderRadius: 0, bgcolor: '#F0F9FF', height: '100%', justifyContent: "center", alignItems: "center", textAlign: "center", my: 0 }}>
                        <Typography variant="h2" component="h2" sx={{ color: "primary.main" }}>90%</Typography>
                        <Typography variant="body2">Success Score</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BusinessPartner;
