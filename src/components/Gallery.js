import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import UploadFolderIcon from '@mui/icons-material/FolderOpen';

const FileExplorer = () => {
  const [activeSection, setActiveSection] = useState('Recent');
  const [activeFilter, setActiveFilter] = useState('All');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openFolderDialog, setOpenFolderDialog] = useState(false);
  const [folderName, setFolderName] = useState('Untitled Folder');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCreateFolderClick = () => {
    setOpenFolderDialog(true);
    handleMenuClose();
  };

  const handleFolderDialogClose = () => {
    setOpenFolderDialog(false);
  };

  const handleFolderCreate = () => {
    alert(`Folder "${folderName}" created!`);
    setOpenFolderDialog(false);
    setFolderName('Untitled Folder');
  };

  const handleUploadFilesClick = () => {
    document.getElementById('fileInput').click();
    handleMenuClose();
  };

  return (
    <div className="file-explorer">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <ul className="nav-list">
          <li
            className={activeSection === 'Recent' ? 'active' : ''}
            onClick={() => setActiveSection('Recent')}
          >
            Recent
          </li>
          <li
            className={activeSection === 'Favorites' ? 'active' : ''}
            onClick={() => setActiveSection('Favorites')}
          >
            Favorites
          </li>
          <li
            className={activeSection === 'Folders' ? 'active' : ''}
            onClick={() => setActiveSection('Folders')}
          >
            Folders
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {['All', 'Images', 'PDF', 'Audio', 'Videos'].map((filter) => (
            <button
              key={filter}
              className={`filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Display Selected Content */}
        <div className="file-display">
          <p className="no-items">
            {`No Item(s) in ${activeSection} - Filter: ${activeFilter}`}
          </p>
        </div>

        {/* New Button and Menu */}
        <div style={{ padding: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleMenuClick}>
            New
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleCreateFolderClick}>
              <FolderIcon style={{ marginRight: '10px' }} />
              Folder
            </MenuItem>
            <MenuItem onClick={handleUploadFilesClick}>
              <UploadFileIcon style={{ marginRight: '10px' }} />
              Upload Files
            </MenuItem>
          </Menu>

          {/* Hidden file input for uploading files */}
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => alert(`File "${e.target.files[0].name}" uploaded!`)}
          />

          {/* Dialog for creating a new folder */}
          <Dialog open={openFolderDialog} onClose={handleFolderDialogClose}>
            <DialogTitle>New Folder</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Folder Name"
                type="text"
                fullWidth
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFolderDialogClose} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleFolderCreate} color="primary">
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
