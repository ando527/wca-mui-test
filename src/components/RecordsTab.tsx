import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const RecordsTab: React.FC = () => {
  const records = [
    { event: '3x3x3 Cube', record: 'World Record: 8.87' },
    { event: '2x2x2 Cube', record: 'National Record: 2.18' },
    // Add more records here
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Records
      </Typography>
      <List>
        {records.map((record, index) => (
          <ListItem key={index}>
            <ListItemText primary={record.event} secondary={record.record} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecordsTab;
