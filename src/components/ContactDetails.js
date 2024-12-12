import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Divider,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Email', value: 1 },
];

const COLORS = ['#0088FE'];

const ContactDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box display="flex" p={2}>

      {/* Sidebar Contact List */}
      <Box width="20%" pr={2} borderRight="1px solid #ddd">
        <Typography variant="h6" gutterBottom>
          All Contacts
        </Typography>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ mr: 2 }}>kW</Avatar>
              <Box>
                <Typography variant="subtitle1">Kowsik</Typography>
                <Typography variant="body2" color="text.secondary">
                  kowsik.it@westayclose.in
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 888 900 9646
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Area */}
      <Box flex={1} pl={2}>

        {/* Contact Properties */}
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Contact Properties
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ mr: 2 }}>KW</Avatar>
              <Typography variant="subtitle1">Kowsik</Typography>
            </Box>
            <Typography>Email:kowsik.it@westayclose.in</Typography>
            <Typography>Phone: 1 888 900 9646</Typography>
            <Typography>Facebook: <a href="https://www.facebook.com/people/Westayclose-Wsc/61568392426424/">https://www.facebook.com/people/Westayclose-Wsc/61568392426424/</a></Typography>
            <Typography>linkedin: <a href="https://in.linkedin.com/company/livmo-pvt-ltd">https://in.linkedin.com/company/livmo-pvt-ltd</a></Typography>
            <Typography>Title: Customer Support Executive</Typography>
            <Typography>Contact Created Time: 05 Dec 06:11 PM</Typography>
            <Typography>Layout: Westayclose.o</Typography>
          </CardContent>
        </Card>

        {/* Tabs for Ticket Sections */}
        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 2 }}>
          <Tab label="Overview" />
          <Tab label="History" />
          <Tab label="Activities" />
          <Tab label="Tickets" />
          <Tab label="Happiness Rating" />
        </Tabs>

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

        {/* Recent Tickets */}
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Pending Tickets
            </Typography>
            <Divider />
            <Box mt={2}>
              <CheckCircleOutlineIcon color="success" sx={{ mr: 1 }} />
              <Typography display="inline">Here's your first ticket.</Typography>
              <Chip label="Closed" color="success" sx={{ ml: 1 }} />
            </Box>
          </CardContent>
        </Card>

        {/* Traffic Analysis */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Traffic Analysis
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={60} fill="#0088FE" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Typography align="center">1 Email (100%)</Typography>
          </CardContent>
        </Card>

      </Box>
    </Box>
  );
};

export default ContactDetails;
