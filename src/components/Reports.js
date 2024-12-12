import React, { useState, useEffect } from 'react';
import ReportApi from '../api/ReportApi'; // Import the default export
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
  IconButton,
  Menu,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputBase,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';

const categories = [
  'Ticket Reports',
  'Article Reports',
  'Activity Reports',
  'Product Reports',
];

const Reports = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ title: '', description: '' });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm('');
  };

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch all reports on component load
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await ReportApi.getAllReports();
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleCreateReport = async () => {
    try {
      await ReportApi.createOrUpdateReport(newReport);
      fetchReports();
      setNewReport({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  const handleDeleteReport = async (id) => {
    try {
      await ReportApi.deleteReport(id);
      fetchReports();
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  return (
    <Box p={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Static Reports</Typography>
        <IconButton onClick={handleClick}>
          <Typography variant="subtitle1" sx={{ mr: 1 }}>
            Static Reports
          </Typography>
          <ArrowDropDownIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ width: 300 }}
        >
          <Box px={2} py={1} display="flex" alignItems="center">
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase
              placeholder="Search Report"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
          <Divider />

          <List>
            <Typography
              variant="body2"
              color="primary"
              sx={{ px: 2, pt: 1, fontWeight: 'bold' }}
            >
              STATIC REPORTS
            </Typography>
            {filteredReports.map((report, index) => (
              <ListItem button key={index} onClick={handleClose}>
                <ListItemText primary={report.name} />
              </ListItem>
            ))}

            <Divider />

            {categories.map((category, index) => (
              <ListItem button key={index}>
                <ListItemText primary={category} />
                <ChevronRightIcon />
              </ListItem>
            ))}
          </List>
        </Menu>
      </Box>

      {/* Table for Reports */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>REPORT NAME</strong></TableCell>
              <TableCell><strong>DESCRIPTION</strong></TableCell>
              <TableCell><strong>LAST ACCESSED</strong></TableCell>
              <TableCell><strong>LAST MODIFIED</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report, index) => (
              <TableRow key={index}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.description}</TableCell>
                <TableCell>{report.lastAccessed || '-'}</TableCell>
                <TableCell>{report.lastModified || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
