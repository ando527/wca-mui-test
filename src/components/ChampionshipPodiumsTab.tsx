import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ChampionshipPodiumsTab: React.FC = () => {
  const podiums = [
    { event: '3x3x3 Cube', place: '1st', competition: 'Nationals 2022' },
    { event: '2x2x2 Cube', place: '2nd', competition: 'Regionals 2023' },
    // Add more podiums here
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Championship Podiums
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Competition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {podiums.map((podium, index) => (
            <TableRow key={index}>
              <TableCell>{podium.event}</TableCell>
              <TableCell>{podium.place}</TableCell>
              <TableCell>{podium.competition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ChampionshipPodiumsTab;
