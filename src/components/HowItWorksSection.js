import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Link } from '@mui/material';
import StayIllustration from '../assets/illustration-stay-productive.png'
import IconArrow from '../assets/icon-arrow.svg'

const HowItWorksSection = () => {
    return (

        <Grid container spacing={3}>
            <Grid xs={12} sm={6}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                    minHeight="10vh"
                    component="img"
                    margin="auto"
                    alt="Logo"
                    width="100%"

                    src={StayIllustration}
                    sx={{
                        mb: { xs: '5vh', sm: '25vh' }
                    }}


                />
            </Grid>
            <Grid xs={12} sm={6}>
                <Box sx={{
                    padding: { xs: '0 5px', sm: '0' }
                }}>
                    <Typography fontWeight="700" color="white" textAlign="left" sx={{ mt: { xs: '3vh', sm: '15vh' }, fontSize: { xs: '25px', sm: '30px' } }}>Stay productive,<br /> wherever you are</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="2vh" textAlign="left">Never let location be an issue when accessing your files. Fylo has you <br /> covered for all of your file storage needs.</Typography>
                    <Typography fontSize="13px" fontWeight="200" color="white" mt="2vh" textAlign="left">Securely share files and folders with friends, family and colleagues for live <br /> collaboration. No email attachments required.</Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        mt: '2vh'

                    }}>
                        <Link href="#" fontSize="13px" sx={{
                            textUnderlineOffset: '5px',
                            color: '#60a2a0',
                            ':hover': {
                                color: "white",

                            }
                        }}>See how Fylo works

                        </Link>

                        <Box


                            minHeight="3vh"
                            component="img"
                            top="50%"
                            alt="Logo"
                            src={IconArrow}
                            sx={{
                                ':hover': {
                                    fill: "white",

                                }
                            }}

                        />
                    </Box>
                </Box>

            </Grid>


        </Grid>

    )
}

export default HowItWorksSection