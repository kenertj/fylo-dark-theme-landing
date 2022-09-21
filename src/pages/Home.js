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

            }}
        >   <Box sx={{
            background: '#1c2230'
        }}>
                <HeroSection />
            </Box>
            <Box sx={{
                background: '#181e2a'
            }}>
                <FeaturesSection />
            </Box>
            <HowItWorksSection />
            <Testimonials />

        </Box>
    )
}

export default Home