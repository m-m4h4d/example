import React from 'react';
import { MobileView, DesktopView  } from '..';
import { AppBar, Container, Toolbar } from '@mui/material';

function NavBar() {
    return (
        <AppBar sx={{ background: 'white', color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: '' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MobileView />
                    <DesktopView />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
