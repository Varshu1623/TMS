import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Popover,
  TextField,
  Grid,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CampaignIcon from '@mui/icons-material/Campaign';
import CommentIcon from '@mui/icons-material/Comment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './CommunityDashboard.css';

const CommunityStats = () => {
  const [timeframe, setTimeframe] = useState('week');
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleTimeframeChange = (event, newTimeframe) => {
    setTimeframe(newTimeframe);
    if (newTimeframe === 'custom') {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleApply = () => {
    alert(`Custom Date Range Applied: ${startDate} to ${endDate}`);
    setAnchorEl(null);
  };


  return (
    <Box p={4}>
      {/* Community Stats Section */}
      <Typography variant="h5" gutterBottom>
        Community Stats
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={2} textAlign="center">
              <ChatBubbleOutlineIcon fontSize="large" />
              <Typography>Forums</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <EditNoteIcon fontSize="large" />
              <Typography>Topics</Typography>
              <Typography variant="h6">1</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <CampaignIcon fontSize="large" />
              <Typography>Announcements</Typography>
              <Typography variant="h6">1</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <CommentIcon fontSize="large" />
              <Typography>Comments</Typography>
              <Typography variant="h6">0</Typography>
            </Grid>
            <Grid item xs={2} textAlign="center">
              <PersonOutlineIcon fontSize="large" />
              <Typography>Unique Users</Typography>
              <Typography variant="h6">1</Typography>
            </Grid>
          </Grid>
          <Box mt={2} textAlign="right">
            <Button
              variant={timeframe === 'week' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('week')}
              sx={{ mr: 1 }}
            >
              Week
            </Button>
            <Button
              variant={timeframe === 'month' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('month')}
              sx={{ mr: 1 }}
            >
              Month
            </Button>
            <Button
              variant={timeframe === 'year' ? 'contained' : 'outlined'}
              onClick={() => handleTimeframeChange('year')}
              sx={{ mr: 1 }}
            >
              Year
            </Button>
            <Button
              variant={timeframe === 'custom' ? 'contained' : 'outlined'}
              onClick={(e) => handleTimeframeChange(e, 'custom')}
            >
              Custom
            </Button>
          </Box>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box p={2} width={300}>
              <Typography variant="h6" gutterBottom>
                Custom Date Range
              </Typography>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                margin="normal"
              />
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                margin="normal"
              />
              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button onClick={handleClose} sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleApply}>
                  Apply
                </Button>
              </Box>
            </Box>
          </Popover>
        </CardContent>
      </Card>

      {/* Unique User Participation Trend */}
      <Box mt={4}>
        <Typography variant="h6">Unique User Participation Trend</Typography>
        <Box mt={2} height={200} bgcolor="#f9f9f9" textAlign="center" p={5}>
          <Typography>No data available</Typography>
        </Box>
      </Box>

      {/* Topic Traffic by Type */}
      <Box mt={4}>
        <Typography variant="h6">Topic Traffic by Type</Typography>
        <Box mt={2} height={200} bgcolor="#f9f9f9" textAlign="center" p={5}>
          <Typography>No data available</Typography>
        </Box>
      </Box>

      {/* Stats by Topic Type */}
      <Box mt={4}>
        <Typography variant="h6">Stats by Topic Type</Typography>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Questions" />
          <Tab label="Ideas" />
          <Tab label="Problems" />
          <Tab label="Announcements" />
        </Tabs>
        <Box mt={2} height={200} bgcolor="#f9f9f9" textAlign="center" p={5}>
          <Typography>No data available</Typography>
        </Box>
      </Box>

      {/* Top Contributors */}
      <Box mt={4}>
        <Typography variant="h6">Top Contributors</Typography>
        <Card elevation={3} sx={{ mt: 2 }}>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: '#FFCCBC',
                      borderRadius: '50%',
                      textAlign: 'center',
                      lineHeight: '50px',
                      fontWeight: 'bold',
                      color: '#fff',
                      mr: 2,
                    }}
                  >
                    VA
                  </Box>
                  <Box>
                    <Typography variant="h6">Kowsik</Typography>
                    <Typography>kowsik.it@westayclose.in</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} textAlign="center">
                <Typography>Topics: 1</Typography>
                <Typography>Comments: 0</Typography>
                <Typography>Followers: 0</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CommunityStats;
