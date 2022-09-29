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
                    height: 34,
                    mt: "20vh",
                    ml: "10vh"
                }}
                alt="Logo"
                src={Logo}
            />
            <Grid container spacing={1} sx={{
                mt: '5vh'
            }}>
                <Grid item xs>
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
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center" display="inline">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                </Grid>
                <Grid item xs>
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
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center" display="inline-block" ml="2vh">+1-543-123-4567</Typography>
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
                <Grid item xs>
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
                <Grid item xs>
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