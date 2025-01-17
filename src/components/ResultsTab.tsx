import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ResultsTab: React.FC = () => {
  const results = [
    { event: '3x3x3 Cube', result: '8.87', competition: 'Nationals 2022' },
    { event: '2x2x2 Cube', result: '2.18', competition: 'Regionals 2023' },
    // Add more results here
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Results
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Competition</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{result.event}</TableCell>
              <TableCell>{result.result}</TableCell>
              <TableCell>{result.competition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ResultsTab;
