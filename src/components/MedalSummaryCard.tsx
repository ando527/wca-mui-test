import React from 'react';
import { Box, Typography } from '@mui/material';

const MedalSummaryCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFD313',
        color: '#000000',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 2,
        textAlign: 'center',
      }}
       id="medal-summary-card"
    >
      <Typography variant="h6">Medal Collection</Typography>
      <Typography variant="body1">
        4 Gold <br /> 11 Silver <br /> 5 Bronze
      </Typography>
    </Box>
  );
};

export default MedalSummaryCard;
