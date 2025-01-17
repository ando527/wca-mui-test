import React from 'react';
import { Box, Typography } from '@mui/material';

const RecordSummaryCard: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#029347',
        color: '#fcfcfc',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 2,
        textAlign: 'center',
      }}
       id="record-summary-card"
    >
      <Typography variant="h6">Record Collection</Typography>
      <Typography variant="body1">
        4 World <br /> 11 Continental <br /> 5 National
      </Typography>
    </Box>
  );
};

export default RecordSummaryCard;
