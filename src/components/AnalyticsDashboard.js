import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  IconButton,
  Menu,
  InputBase,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const dashboards = [
  { name: 'Tickets Status Dashboard', description: '-', lastAccessed: '-', lastModified: '-' },
  { name: 'Blueprint Dashboard', description: '-', lastAccessed: '-', lastModified: '-' },
  { name: 'SLA Dashboard', description: '-', lastAccessed: '-', lastModified: '-' },
  { name: 'Overview Dashboard', description: 'Provides an all-encompassing overview of key ...', lastAccessed: '07:06 PM', lastModified: '-' },
  { name: 'Customer Happiness Dash...', description: 'Provides you an overview of how satisfied your...', lastAccessed: '-', lastModified: '-' },
];

const dropdownItems = [
  { category: 'Popular Dashboards', items: ['SLA Dashboard', 'Overview Dashboard', 'Customer Happiness Dashboard'] },
  { category: 'Telephony Dashboards', items: ['Calls Dashboard'] },
  { category: 'Time Based Dashboards', items: ['First Response Time', 'Response Time', 'Resolution Time'] },
  { category: 'Public Dashboards', items: ['Tickets Dashboards'] },
];

const AnalyticsDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDashboard, setSelectedDashboard] = useState('Popular Dashboards (5)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (dashboard) => {
    setSelectedDashboard(dashboard);
    handleClose();
  };

  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ mr: 1 }}>
            {selectedDashboard}
          </Typography>
          <IconButton onClick={handleClick}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <Box px={2} py={1} display="flex" alignItems="center">
              <SearchIcon />
              <InputBase placeholder="Search Dashboard" fullWidth sx={{ ml: 1 }} />
            </Box>
            {dropdownItems.map((section, index) => (
              <Box key={index}>
                <Typography variant="subtitle2" sx={{ px: 2, pt: 1, fontWeight: 'bold' }}>
                  {section.category.toUpperCase()}
                </Typography>
                {section.items.map((item, i) => (
                  <MenuItem key={i} onClick={() => handleMenuItemClick(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Menu>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>DASHBOARD NAME</strong></TableCell>
              <TableCell><strong>DESCRIPTION</strong></TableCell>
              <TableCell><strong>LAST ACCESSED</strong></TableCell>
              <TableCell><strong>LAST MODIFIED</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboards.map((dashboard, index) => (
              <TableRow key={index}>
                <TableCell>{dashboard.name}</TableCell>
                <TableCell>{dashboard.description}</TableCell>
                <TableCell>{dashboard.lastAccessed}</TableCell>
                <TableCell>{dashboard.lastModified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnalyticsDashboard;
