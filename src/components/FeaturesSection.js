import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import Iconaccess from '../assets/icon-access-anywhere.svg'
import IconSecurity from '../assets/icon-security.svg'
import IconAny from '../assets/icon-any-file.svg'
import IconCollab from '../assets/icon-collaboration.svg'

const FeaturesSection = () => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: '900px'
        }}>
            <Grid container spacing={0} sx={{
                mt: '13vh',
                position: 'relative',


            }}>
                <Grid xs={12} sm={6} sx={{

                }}>
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
                    <Typography fontSize="18px" fontWeight="1000" color="white" mt="20px" textAlign="center">Access your files, anywhere</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center">The ability to use a smartphone, tablet, or computer <br /> to access your account means your files follow you <br /> everywhere.</Typography>
                </Grid>
                <Grid xs={12} sm={6} sx={{
                    mt: { xs: '10vh' }
                }}>
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
                    <Typography fontSize="18px" fontWeight="1000" color="white" mt="20px" textAlign="center">Security you can trust</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center">2-factor authentication and user-controlled encryption are <br /> just a couple of the security features we allow to help <br /> secure your files.</Typography>
                </Grid>
                <Grid xs={12} sm={6} sx={{
                    mt: { xs: '10vh', sm: '15vh' }
                }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="10vh"
                        component="img"
                        margin="auto"
                        alt="Logo"
                        src={IconCollab}

                    />
                    <Typography fontSize="18px" fontWeight="1000" color="white" mt="20px" textAlign="center">Real-time collaboration</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center">Securely share files and folders with friends, family and <br /> colleagues for live collaboration. No email attachments <br /> required.</Typography>
                </Grid>
                <Grid xs={12} sm={6}
                    sx={{
                        mt: { xs: '10vh', sm: '15vh' }
                    }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        minHeight="10vh"
                        component="img"
                        margin="auto"
                        alt="Logo"
                        src={IconAny}

                    />
                    <Typography fontSize="18px" fontWeight="1000" color="white" mt="20px" textAlign="center">Store any type of file</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" mb="15vh" textAlign="center">Whether you're sharing holidays photos or work <br /> documents, Fylo has you covered allowing for all file <br /> types to be securely stored and shared.</Typography>
                </Grid>

            </Grid>
        </Box >
    )
}

export default FeaturesSection