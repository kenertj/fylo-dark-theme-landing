import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import Iconaccess from '../assets/icon-access-anywhere.svg'
import IconSecurity from '../assets/icon-security.svg'

const FeaturesSection = () => {
    return (
        <Grid container spacing={1} sx={{
            mt: '13vh'
        }}>
            <Grid xs={6}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    minHeight="10vh"
                    component="img"
                    margin="auto"
                    alt="Logo"
                    src={Iconaccess}

                />
            </Grid>
            <Grid xs={6}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    minHeight="10vh"
                    component="img"
                    margin="auto"
                    alt="Logo"
                    src={IconSecurity}

                />
            </Grid>

        </Grid>
    )
}

export default FeaturesSection