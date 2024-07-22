import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const BusinessPartner = () => {
    return (
        <Box sx={{ width: '100%', py: 6, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom>
                <b>Choose Us As A Business Partner</b>
            </Typography>ٖ
            <Grid container spacing={0} sx={{ width: '80%' }}>
                <Grid item sm={12} md={4}>
                    <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 0 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            "Turning Ideas Into Businesses"
                        </Typography>
                        <Typography variant="body1">
                            Tackling your business bottlenecks with the top business branding services through organic traffic - to generate leads and a full conversion funnel with organic ranking. Stay entrusted with us for acquiring business solutions with profits and budget-friendly services.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={4}></Grid>
                <Grid item sm={12} md={4}></Grid>
                <Grid item sm={12} md={4}></Grid>
                <Grid item sm={12} md={4}></Grid>
                <Grid item sm={12} md={4}></Grid>
            </Grid>
        </Box>
    );
};

export default BusinessPartner;
