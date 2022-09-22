import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent, TextField, Button } from '@mui/material';


const Getstarted = () => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: '700px'
        }}>
            <Grid>
                <Grid xs={12}>
                    <Card sx={{ maxWidth: '100vh', backgroundColor: '#21293c' }}>
                        <CardContent>
                            <Typography fontSize="30px" fontWeight="700" color="white" textAlign="center">Get early access today</Typography>
                            <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="center">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br /> questions, our support team would be happy to help you.</Typography>
                            <TextField id="filled-basic" label="Email" variant="filled" sx={{
                                backgroundColor: 'white',
                                borderRadius: '23px',
                                minWidth: '45vh',
                                maxHeight: '7vh'
                            }} />
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



                            }}>Get Started For Free</Button>

                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Getstarted