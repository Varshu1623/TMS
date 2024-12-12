import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const accounts = [
  {
    id: 1,
    name: 'WSC',
    website: 'https://westayclose.in//',
    email: 'kowsik@westayclose.in',
    phone: '1 888 900 9646',
  },
];

const AccountList = () => {
  const navigate = useNavigate();

  const handleAccountClick = (accountId) => {
    navigate(`/account/${accountId}`);
  };

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        All Accounts (All)
      </Typography>
      {accounts.map((account) => (
        <Card key={account.id} onClick={() => handleAccountClick(account.id)} sx={{ mb: 2, cursor: 'pointer' }}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{account.name.charAt(0)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {account.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {account.website} · {account.email} · {account.phone}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
          <Divider />
        </Card>
      ))}
    </Box>
  );
};

export default AccountList;
