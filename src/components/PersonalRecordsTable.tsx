import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { shadows } from '@mui/system';



const PersonalRecordsTable: React.FC = () => {
  const records = [
    { event: '3x3x3 Cube', nr: 318, cr: 410, wr: 9129, single: '8.87', average: '11.05' },
    { event: '2x2x2 Cube', nr: 352, cr: 439, wr: 8059, single: '2.18', average: '4.01' },
    // Add more records as needed...
  ];

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 2,
        backgroundColor: '#fff',
      }}>
      <Typography variant="h6" gutterBottom>
        Current Personal Records
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell>NR</TableCell>
            <TableCell>CR</TableCell>
            <TableCell>WR</TableCell>
            <TableCell>Single</TableCell>
            <TableCell>Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.event}</TableCell>
              <TableCell>{record.nr}</TableCell>
              <TableCell>{record.cr}</TableCell>
              <TableCell>{record.wr}</TableCell>
              <TableCell>{record.single}</TableCell>
              <TableCell>{record.average}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PersonalRecordsTable;
