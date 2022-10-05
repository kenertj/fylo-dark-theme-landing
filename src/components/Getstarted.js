import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';


const Getstarted = () => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: { xs: '40vh', sm: '700px' },




        }}>
            <Grid sx={{
                position: 'absolute',
                top: { xs: '435vh', sm: '300vh', md: '310vh', lg: '335vh', xl: '360vh' }
            }}>
                <Grid xs={12}>
                    <Card sx={{ maxWidth: { xs: '40vh', sm: '100vh' }, minWidth: { xs: '30vh' }, minHeight: { xs: '40vh' }, backgroundColor: '#1c2230' }}>
                        <CardContent>
                            <Typography fontWeight="700" color="white" mt="2vh" textAlign="center" sx={{ fontSize: { xs: '18px', sm: '30px' } }}>Get early access today</Typography>
                            <Typography fontWeight="200" color="white" mt="2vh" mb="4vh" textAlign="center" sx={{ fontSize: { xs: '12px', sm: '13px' } }}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br /> questions, our support team would be happy to help you.</Typography>
                            <TextField id="filled-basic" type="email" label="Email" variant="filled" sx={{
                                backgroundColor: 'white',
                                borderRadius: '23px',
                                minWidth: { xs: '35vh', sm: '55vh' },
                                margin: { xs: '1vh auto 2vh auto' },

                                maxHeight: '6vh',
                                mb: '2vh'
                            }} />

                            <Button sx={{
                                position: "relative",
                                color: 'white',
                                borderRadius: '23px',
                                padding: { xs: '10px 8vh', sm: '10px 30px' },
                                ml: { xs: '1vh', sm: '4vh' },
                                mr: { xs: 'auto', sm: '5vh' },
                                textTransform: 'none',
                                backgroundImage: 'linear-gradient(#65e2d9,#339ecc)',
                                ':hover': {
                                    backgroundColor: "#8cdae4",
                                    backgroundImage: "none"
                                },



                            }}>Get Started For Free</Button>


                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Getstarted