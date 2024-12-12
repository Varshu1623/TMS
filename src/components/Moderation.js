import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Card, CardContent } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const Moderation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box p={4} textAlign="center">
      {/* Tabs for Topics and Replies */}
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Topics (0)" />
        <Tab label="Replies (0)" />
      </Tabs>

      {/* No Posts Message */}
      <Card elevation={0} sx={{ mt: 4, maxWidth: 600, margin: 'auto' }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <SentimentDissatisfiedIcon sx={{ fontSize: 100, color: '#90caf9' }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              There are no posts to be displayed
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Moderation;
