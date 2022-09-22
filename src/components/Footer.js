import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import Logo from '../assets/logo.svg';
import IconLocation from '../assets/icon-location.svg';
import IconPhone from '../assets/icon-phone.svg';
import IconEmail from '../assets/icon-email.svg';

const Footer = () => {
    return (
        <Box>
            <Box
                component="img"
                sx={{
                    height: 34,
                }}
                alt="Logo"
                src={Logo}
            />
            <Grid container spacing={3}>
                <Grid item xs>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="10vh"
                        component="img"
                        margin="auto"
                        alt="Logo"
                        src={IconLocation}

                    />
                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs>

                </Grid>
                <Grid item xs>


                </Grid>

            </Grid>
        </Box>
    )
}

export default Footer