import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';


const Getstarted = () => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: '700px',



        }}>
            <Grid sx={{
                position: 'absolute',
                top: '330vh'
            }}>
                <Grid xs={12}>
                    <Card sx={{ maxWidth: '100vh', backgroundColor: '#1c2230' }}>
                        <CardContent>
                            <Typography fontSize="30px" fontWeight="700" color="white" mt="2vh" textAlign="center">Get early access today</Typography>
                            <Typography fontSize="13px" fontWeight="200" color="white" mt="2vh" mb="4vh" textAlign="center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br /> questions, our support team would be happy to help you.</Typography>
                            <TextField id="filled-basic" type="email" label="Email" variant="filled" sx={{
                                backgroundColor: 'white',
                                borderRadius: '23px',
                                minWidth: '55vh',
                                maxHeight: '6vh',
                                mb: '2vh'
                            }} />
                            <Button sx={{
                                position: "relative",
                                color: 'white',
                                borderRadius: '23px',
                                padding: '10px 30px',
                                ml: '4vh',
                                mr: '5vh',
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