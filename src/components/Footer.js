import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent, TextField, Button, Link } from '@mui/material';
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
                    height: { xs: '50px', sm: '34px' },
                    mt: "20vh",
                    ml: { xs: '2vh', sm: '10vh' }
                }}
                alt="Logo"
                src={Logo}
            />
            <Grid container spacing={1} sx={{
                mt: '5vh',
                ml: { xs: '1vh' }
            }}>
                <Grid xs={12} sm={3} sx={{
                    mb: { xs: '1vh', sm: '0vh' }
                }}>
                    <Box
                        display="inline-block"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="1vh"
                        component="img"
                        margin="auto"
                        alt="Logo"

                        src={IconLocation}

                    />

                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="left" ml="2vh" display="inline">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>

                </Grid>
                <Grid xs={12} sm={3} sx={{
                    mb: { xs: '4vh', sm: '0vh' }
                }}>
                    <Box
                        display="inline-block"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="1vh"
                        component="img"
                        margin="auto"
                        alt="Logo"
                        src={IconPhone}

                    />
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center" display="inline-block" ml="2vh" sx={{
                        mb: { xs: '1vh', sm: '0vh' }
                    }}>+1-543-123-4567</Typography>
                    <br />
                    <Box
                        display="inline-block"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="1vh"
                        component="img"
                        margin="auto"
                        alt="Logo"
                        src={IconEmail}

                    />
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center" display="inline-block" ml="2vh">example@fylo.com</Typography>
                </Grid>
                <Grid xs={12} sm={3} sx={{
                    mb: { xs: '4vh', sm: '0vh' },
                    lineHeight: '2'
                }}>
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },

                    }}>About Us</Link>
                    <br />
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Jobs</Link>
                    <br />
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Press</Link>
                    <br />
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Blog</Link>
                </Grid>
                <Grid xs={12} sm={3} sx={{
                    lineHeight: '2',
                }}>
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Contact Us</Link>
                    <br />
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Terms</Link>
                    <br />
                    <Link href="#" sx={{
                        textDecoration: 'none',
                        color: '#f9ffff',
                        fontWeight: '400',
                        ':hover': {
                            fontWeight: '700',

                        },
                    }}>Privacy</Link>


                </Grid>

            </Grid>
        </Box>
    )
}

export default Footer