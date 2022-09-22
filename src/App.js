import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Open Sans, Roboto, sans-serif"
  },
  palette: {
    background: {
      default: '#1c2230',
      paper: '#1c2230',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <Box sx={{
        background: '#0c1524'
      }}>
        <Footer />
      </Box>
    </ThemeProvider>

  );
}

export default App;
