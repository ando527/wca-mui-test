import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const CompetitionsTab: React.FC = () => {
  const competitions = [
    { name: 'Nationals 2022', location: 'Sydney, Australia', date: 'July 10, 2022' },
    { name: 'Regionals 2023', location: 'Melbourne, Australia', date: 'March 5, 2023' },
    // Add more competitions here
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Competitions
      </Typography>
      <List>
        {competitions.map((competition, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={competition.name}
              secondary={`${competition.location} - ${competition.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CompetitionsTab;
