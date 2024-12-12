import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import CallApi from '../api/CallApi';

const Calls = () => {
  const [showAddCall, setShowAddCall] = useState(false);
  const [calls, setCalls] = useState([]);

  const [formData, setFormData] = useState({
    subject: '',
    direction: 'inbound',
    callStatus: 'completed',
    startTime: '',
    duration: '',
  });

  const fetchCalls = async () => {
    try {
      const response = await CallApi.getAllCalls();
      setCalls(response.data);
    } catch (error) {
      console.error('Error fetching calls:', error);
    }
  };

  useEffect(() => {
    fetchCalls();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await CallApi.createCall(formData);
      fetchCalls(); // Refresh the call list after adding a new call
      setShowAddCall(false); // Close the modal
      setFormData({
        subject: '',
        direction: 'inbound',
        callStatus: 'completed',
        startTime: '',
        duration: '',
      });
    } catch (error) {
      console.error('Error adding call:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" textAlign="center" p={2}>
      <Box mb={2}>
        <CalendarTodayIcon style={{ fontSize: 80, color: '#9e9e9e' }} />
      </Box>

      <Typography variant="h5" gutterBottom>
        {calls.length === 0 ? 'No Calls available' : 'Your Calls'}
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={3}>
        Add a new Call to be logged.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={() => setShowAddCall(true)}>
          Add Call
        </Button>
      </Stack>

      {/* Modal for Add Call */}
      <Modal open={showAddCall} onClose={() => setShowAddCall(false)}>
        <Box p={4} bgcolor="white" width={{ xs: '100%', sm: '500px' }} mx="auto" borderRadius={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Add Call</Typography>
            <Button onClick={() => setShowAddCall(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
            required
          />
          <FormControl margin="normal" fullWidth>
            <Typography>Direction</Typography>
            <RadioGroup row name="direction" value={formData.direction} onChange={handleChange}>
              <FormControlLabel value="inbound" control={<Radio />} label="Inbound" />
              <FormControlLabel value="outbound" control={<Radio />} label="Outbound" />
            </RadioGroup>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Typography>Call Status</Typography>
            <RadioGroup row name="callStatus" value={formData.callStatus} onChange={handleChange}>
              <FormControlLabel value="completed" control={<Radio />} label="Completed" />
              <FormControlLabel value="scheduled" control={<Radio />} label="Scheduled" />
              <FormControlLabel value="current" control={<Radio />} label="Current Call" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Start Time"
            type="datetime-local"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Duration (HH:MM)"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Calls;
