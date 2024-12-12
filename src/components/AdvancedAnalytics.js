import React from 'react';
import { Box, Typography, Button, Link, Container } from '@mui/material';
import IntegrationInstructionsIcon from '@mui/icons-material/ShowChart';

const AdvancedAnalytics = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        p={2}
      >
        {/* Icon Illustration */}
        <IntegrationInstructionsIcon sx={{ fontSize: 100, color: '#1976d2', mb: 2 }} />

        {/* Message */}
        <Typography variant="h5" gutterBottom>
          Wsc Analytics Integration Required
        </Typography>
        
        {/* Instruction Text */}
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Click{' '}
          <Link href="#" color="primary" underline="hover">
            here
          </Link>{' '}
          to integrate your data and Wsc Analytics.{' '}
          <Link href="#" color="primary" underline="hover">
            Learn More
          </Link>
        </Typography>

      
        <Box mt={3}>
          <Button
            variant="outlined"
            color="primary"
            href="#"
            sx={{ textTransform: 'none' }}
          >
            Access Wsc Analytics
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdvancedAnalytics;
