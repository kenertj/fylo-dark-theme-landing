import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import IntroIllustration from '../assets/illustration-intro.png'
import DesktopPattern from '../assets/bg-curvy-desktop.svg'

const HeroSection = () => {
    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid xs={12} sx={{
                margin: '0 auto'
            }}>
                <Box


                    maxWidth="100%"
                    position="absolute"
                    top="90vh"
                    minHeight="10vh"
                    component="img"
                    margin="auto"
                    alt="Logo"
                    src={DesktopPattern}


                />

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="10vh"
                    component="img"
                    margin="auto"
                    width="50%"
                    alt="Logo"
                    src={IntroIllustration}
                    sx={{
                        sm: { width: '100%' }
                    }}

                />

                <Typography fontSize="30px" fontWeight="1000" color="white" mt="30px" mb="20px" textAlign="center" sx={{
                    position: "relative",
                }}>All your files in one secure location,<br /> accessible anywhere.</Typography>

                <Typography fontSize="15px" fontWeight="500" color="white" mt="20px" mb="20px" textAlign="center" sx={{
                    position: "relative",
                }}>Fylo stores all your most important files in one secure location.<br /> Access them wherever you need, share and collaborate with <br /> friends family, and co-workers.</Typography>
                <Box textAlign='center'>
                    <Button sx={{
                        position: "relative",
                        color: 'white',
                        borderRadius: '23px',
                        padding: '10px 80px',
                        textTransform: 'none',
                        backgroundImage: 'linear-gradient(#65e2d9,#339ecc)',
                        ':hover': {
                            backgroundColor: "#8cdae4",
                            backgroundImage: "none"
                        },



                    }}>Get Started</Button>
                </Box>


            </Grid>
        </Grid>
    )
}

export default HeroSection