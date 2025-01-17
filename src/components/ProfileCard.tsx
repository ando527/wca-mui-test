import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';

const ProfileCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 2,
        backgroundColor: '#fff',
      }}
    >
      {/* Profile Picture */}
      <Avatar
        src="/static/images/ma.jpg"
        alt="Mitchell Anderson"
        sx={{ width: 150, height: 150, marginBottom: 2 }}
      />

      {/* Name and Badges */}
      <Typography variant="h5">Mitchell Anderson</Typography>
      <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
        <Chip label="WST Member" color="success" />
        <Chip label="Junior Delegate" color="error" />
      </Box>

      {/* Additional Details */}
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        WCA ID: 2022ANDE01
      </Typography>
      <Typography variant="body1">Gender: Male</Typography>
      <Typography variant="body1">Region: Australia</Typography>
      <Typography variant="body1">Competitions: 48</Typography>
      <Typography variant="body1">Completed Solves: 1659</Typography>
    </Box>
  );
};

export default ProfileCard;
