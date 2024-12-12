import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Grid, Avatar, Divider, Chip } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AccountDetails = () => {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Account Details for ID: {id}
      </Typography>

      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6">Account Owner</Typography>
          <Avatar sx={{ mb: 2 }}>KW</Avatar>
          <Typography>Email: kowsik.i@westayclose.in</Typography>
          <Typography>Phone: 1 888 900 9646</Typography>
          <Typography>Website: <a href="https://westayclose.in/" target="_blank" rel="noopener noreferrer">https://westayclose.in/</a></Typography>
          <Typography>Address: Guindy, chennai, Tamil nadu</Typography>
          <Typography>Account Created Time: 05 Dec 06:11 PM</Typography>
          <Typography>Layout: Westayclose.o</Typography>
        </CardContent>
      </Card>

      {/* Ticket Statistics */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">All Tickets</Typography>
              <Typography variant="h4">1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Open Tickets</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Overdue Tickets</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Happiness Rating</Typography>
              <Box display="flex" alignItems="center">
                <SentimentSatisfiedAltIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="h4">0%</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountDetails;
