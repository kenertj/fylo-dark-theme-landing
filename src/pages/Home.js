import React from 'react'
import { Box } from '@mui/system'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Testimonials from '../components/Testimonials'
import Getstarted from '../components/Getstarted'

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
            <Box sx={{
                background: '#181e2a'
            }}>
                <HowItWorksSection />
            </Box>
            <Box sx={{
                background: '#181e2a'
            }}>
                <Testimonials />
            </Box>
            <Box sx={{
                background: '#181e2a'
            }}>
                <Getstarted />
            </Box>

        </Box>
    )
}

export default Home