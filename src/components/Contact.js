import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
import './Contact.css';

const contacts = [
  {
    id: 1,
    name: 'kowsik',
    company: 'westayclose',
    email: 'kowsik.it@westayclose.in',
    phone: '1 888 900 9646',
  },
];

const Contact = () => {
  const navigate = useNavigate();
  const [selectedLetter, setSelectedLetter] = useState(null);
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleContactClick = (contactId) => {
    navigate(`/contact/${contactId}`);
  };

  return (
    <Box p={2} display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      {/* Contact List Section */}
      <Box flex={1} p={2}>
        <Typography variant="h6" gutterBottom>
          All Contacts (All)
        </Typography>
        <Card elevation={1} sx={{ mb: 2 }}>
          {contacts.map((contact) => (
            <React.Fragment key={contact.id}>
              <CardContent>
                <List>
                  <ListItem button onClick={() => handleContactClick(contact.id)}>
                    <ListItemAvatar>
                      <Avatar>{contact.name.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={contact.name}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {contact.company} · {contact.email} · {contact.phone}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
              <Divider />
            </React.Fragment>
          ))}
        </Card>
      </Box>

      {/* Alphabetical Filter Section */}
      <Box
        sx={{
          width: '50px',
          display: { xs: 'none', md: 'block' },
          borderLeft: '1px solid #ddd',
          textAlign: 'center',
          height: '100vh',
        }}
      >
        <List>
          <ListItem button onClick={() => setSelectedLetter(null)}>
            <Typography color={selectedLetter === null ? 'primary' : 'inherit'}>ALL</Typography>
          </ListItem>
          {alphabets.map((letter) => (
            <ListItem button key={letter} onClick={() => setSelectedLetter(letter)}>
              <Typography color={selectedLetter === letter ? 'primary' : 'inherit'}>
                {letter}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Contact;
 