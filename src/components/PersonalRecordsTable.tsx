import React from 'react';
import {Box, Heading, Table} from "@chakra-ui/react";

const PersonalRecordsTable: React.FC = () => {
  const records = [
    { event: '3x3x3 Cube', nr: 318, cr: 410, wr: 9129, single: '8.87', average: '11.05' },
    { event: '2x2x2 Cube', nr: 352, cr: 439, wr: 8059, single: '2.18', average: '4.01' },
    // Add more records as needed...
  ];

  return (
    <Box>
      <Heading>
        Current Personal Records
      </Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Event</Table.ColumnHeader>
            <Table.ColumnHeader>NR</Table.ColumnHeader>
            <Table.ColumnHeader>CR</Table.ColumnHeader>
            <Table.ColumnHeader>WR</Table.ColumnHeader>
            <Table.ColumnHeader>Single</Table.ColumnHeader>
            <Table.ColumnHeader>Average</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {records.map((record, index) => (
            <Table.Row key={index}>
              <Table.Cell>{record.event}</Table.Cell>
              <Table.Cell>{record.nr}</Table.Cell>
              <Table.Cell>{record.cr}</Table.Cell>
              <Table.Cell>{record.wr}</Table.Cell>
              <Table.Cell>{record.single}</Table.Cell>
              <Table.Cell>{record.average}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default PersonalRecordsTable;
