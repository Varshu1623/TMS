import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Card,
  CardContent,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Activities = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
      textAlign="center"
    >
      <Card elevation={0} sx={{ p: 4, maxWidth: 400 }}>
        <CardContent>
          <Box mb={2}>
            <CalendarTodayIcon sx={{ fontSize: 60, color: '#9e9e9e' }} />
          </Box>
          <Typography variant="h6" gutterBottom>
            No Activities available
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Add a Call, Task, or Event to be completed.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowDropDownIcon />}
            onClick={handleClick}
          >
            Add Activity
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Add Call</MenuItem>
            <MenuItem onClick={handleClose}>Add Task</MenuItem>
            <MenuItem onClick={handleClose}>Add Event</MenuItem>
          </Menu>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Activities;
