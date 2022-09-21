import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Link } from '@mui/material';
import StayIllustration from '../assets/illustration-stay-productive.png'
import IconArrow from '../assets/icon-arrow.svg'

const HowItWorksSection = () => {
    return (

        <Grid container spacing={3}>
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
                    width="100%"
                    mb="25vh"
                    src={StayIllustration}


                />
            </Grid>
            <Grid xs={6}>
                <Typography fontSize="30px" fontWeight="700" color="white" mt="15vh" textAlign="left">Stay productive,<br /> wherever you are</Typography>
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

            </Grid>


        </Grid>

    )
}

export default HowItWorksSection