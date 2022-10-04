import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Profile1 from '../assets/profile-1.jpg'
import Profile2 from '../assets/profile-2.jpg'
import Profile3 from '../assets/profile-3.jpg'
import Quotes from '../assets/bg-quotes.png'

const Testimonials = () => {
    return (
        <Box sx={{
            margin: '0 auto',
            maxWidth: '1100px'
        }}>
            <Grid container spacing={2}>

                <Grid xs={12} sm={4}>
                    <Box
                        maxHeight="4vh"
                        component="img"
                        top="50%"
                        alt="Logo"
                        src={Quotes}
                        position="absolute"
                        mt="238vh"
                        ml="-1vh"



                    />
                    <Card sx={{ maxWidth: '43vh', backgroundColor: '#21293c', mb: { xs: '2vh', sm: '25vh' }, position: 'relative' }}>
                        <CardContent>
                            <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="left">Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.</Typography>
                            <Box sx={{
                                mt: '2vh'
                            }}>
                                <Box
                                    maxHeight="4vh"
                                    component="img"
                                    top="50%"
                                    alt="Logo"
                                    src={Profile1}
                                    borderRadius="50%"
                                    display="inline-block"


                                />
                                <Typography fontSize="13px" fontWeight="800" color="white" mt="5px" textAlign="left" display="inline-block" ml="1vh">Satish Patel <br /> <Box sx={{ fontSize: '9px', fontWeight: '100' }}> Founder & CEO, Huddle</Box></Typography>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>


                <Grid xs={12} sm={4}>
                    <Card sx={{ maxWidth: '43vh', backgroundColor: '#21293c' }}>
                        <CardContent>
                            <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="left">Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.</Typography>
                            <Box sx={{
                                mt: '2vh'
                            }}>
                                <Box
                                    maxHeight="4vh"
                                    component="img"
                                    top="50%"
                                    alt="Logo"
                                    src={Profile2}
                                    borderRadius="50%"
                                    display="inline-block"


                                />
                                <Typography fontSize="13px" fontWeight="800" color="white" mt="5px" textAlign="left" display="inline-block" ml="1vh">Bruce McKenzie <br /> <Box sx={{ fontSize: '9px', fontWeight: '100' }}> Founder & CEO, Huddle</Box></Typography>
                            </Box>
                        </CardContent>

                    </Card>

                </Grid>
                <Grid xs={12} sm={4}>
                    <Card sx={{ maxWidth: '43vh', backgroundColor: '#21293c' }}>
                        <CardContent>
                            <Typography fontSize="13px" fontWeight="200" color="white" mt="5px" textAlign="left">Fylo has improved our team productivity by <br /> an order of magnitude. Since making the <br /> switch our team has become a well-oiled <br /> collaboration machine.</Typography>
                            <Box sx={{
                                mt: '2vh'
                            }}>
                                <Box
                                    maxHeight="4vh"
                                    component="img"
                                    top="50%"
                                    alt="Logo"
                                    src={Profile3}
                                    borderRadius="50%"
                                    display="inline-block"


                                />
                                <Typography fontSize="13px" fontWeight="800" color="white" mt="5px" textAlign="left" display="inline-block" ml="1vh">Iva Boyd <br /> <Box sx={{ fontSize: '9px', fontWeight: '100' }}> Founder & CEO, Huddle</Box></Typography>
                            </Box>
                        </CardContent>

                    </Card>

                </Grid>
            </Grid>
        </Box>

    )
}

export default Testimonials