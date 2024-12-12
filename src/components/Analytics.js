import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  MenuItem,
  Select,
} from '@mui/material';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const DonutChart = ({ value }) => {
  const data = {
    labels: ['Value'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#42A5F5', '#E0E0E0'],
        hoverBackgroundColor: ['#42A5F5', '#E0E0E0'],
      },
    ],
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box width={150} height={150}>
        <Doughnut data={data} options={{ cutout: '70%' }} />
      </Box>
    </Box>
  );
};

const HorizontalBarChart = () => {
  const data = {
    labels: ['First Response Time', 'Response Time', 'Resolution Time'],
    datasets: [
      {
        label: 'Time (hrs)',
        data: [0, 0, 0],
        backgroundColor: '#42A5F5',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 10,
      },
    },
  };

  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

const Analytics = () => {
  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Overview Dashboard
      </Typography>

      <Box mb={2}>
        <Select size="small" defaultValue="last24Hours">
          <MenuItem value="last24Hours">Last 24 Hours</MenuItem>
          <MenuItem value="last7Days">Last 7 Days</MenuItem>
          <MenuItem value="last30Days">Last 30 Days</MenuItem>
        </Select>
      </Box>

      {/* Ticket Summary Cards */}
      <Grid container spacing={2}>
        {[
          { label: 'Open Tickets', value: 0 },
          { label: 'On Hold Tickets', value: 0 },
          { label: 'Overdue Tickets', value: 0 },
          { label: 'Due Today', value: 0 },
          { label: 'Unassigned Due in 1 hour', value: 0 },
          { label: 'Unassigned Tickets', value: 0 },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.label}
                </Typography>
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Ticket Stats Section */}
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Ticket Stats
        </Typography>
        <Card sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="body1" color="textSecondary">
            No Records
          </Typography>
        </Card>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Traffic Analysis, Average Handling Time, and Happiness Rate */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Traffic Analysis
              </Typography>
              <DonutChart value={0} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Average Handling Time
              </Typography>
              <HorizontalBarChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Happiness Rate
              </Typography>
              <DonutChart value={0} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
