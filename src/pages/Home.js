import React from 'react'
import { Box } from '@mui/system'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <Box
            sx={{
                mt: '62px',
                background: '#1c2230'
            }}
        >
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <Testimonials />

        </Box>
    )
}

export default Home