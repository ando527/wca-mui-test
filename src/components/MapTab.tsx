import React from 'react';
import { Box, Typography } from '@mui/material';

const MapTab: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Map
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundColor: '#E0E0E0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Replace with a real map implementation */}
        <Typography>Map Placeholder</Typography>
      </Box>
    </Box>
  );
};

export default MapTab;
