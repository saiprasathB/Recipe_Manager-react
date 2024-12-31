import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // To navigate between pages
import logo from '../assets/logo/logo.png';

// CSS-in-JS for animations and background styles
const styles = {
  welcomeText: {
    backgroundColor: '#ffffff', // White background for welcome message
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold',
    color: '#3f51b5',
    fontSize: '32px',
    marginBottom: '30px',
  },
  logo: {
    animation: 'moveLogo 3s ease-in-out forwards',
    backgroundColor: '#ffffff', // White background for the logo
    padding: '10px',
    borderRadius: '50%', // Circular background for the logo
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  button: {
    animation: 'fadeInUp 1s ease-out forwards',
  },
 
};

const HomePage = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  // Typing effect logic
 

  return (
    <Container>
      <Grid 
        container 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        style={{ height: '100vh', backgroundColor: '#f5f5f5', padding: '20px' }}
      >
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          style={{
            ...styles.logo, 
            width: '100px', 
            height: '100px', 
          }} 
        />

        {/* Welcome Message */}
        <Typography variant="h3" gutterBottom style={styles.welcomeText}>
          Welcome to Recipe Manager
        </Typography>

        {/* Typing Effect for the Motto */}
        <Typography 
          variant="h5" 
          gutterBottom 
          style={styles.typingEffectText}
        >
          {text}
        </Typography>

        {/* Add Recipe Button */}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/add-recipe')}
            style={{ ...styles.button, marginBottom: '20px', width: '220px', height: '60px', borderRadius: '10px' }}
          >
            Add Recipe
          </Button>
        </Grid>

        {/* Start Cooking Button */}
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/start-cooking')}
            style={{ ...styles.button, width: '220px', height: '60px', borderRadius: '10px' }}
          >
            Start Cooking
          </Button>
        </Grid>
      </Grid>

      {/* Adding the animations */}
      <style>{`
        @keyframes moveLogo {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Container>
  );
};

export default HomePage;
