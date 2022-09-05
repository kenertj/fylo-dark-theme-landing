import React from 'react'
import { Box } from '@mui/material';
import IntroIllustration from '../assets/illustration-intro.png'

const HeroSection = () => {
    return (

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            component="img"
            sx={{
                height: '100%',
                width: '100%'


            }}
            alt="Logo"
            src={IntroIllustration}

        />
    )
}

export default HeroSection