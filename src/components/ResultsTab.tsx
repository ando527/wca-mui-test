import React from 'react';
import {Box, Heading, Table} from "@chakra-ui/react";

const ResultsTab: React.FC = () => {
  const results = [
    { event: '3x3x3 Cube', result: '8.87', competition: 'Nationals 2022' },
    { event: '2x2x2 Cube', result: '2.18', competition: 'Regionals 2023' },
    // Add more results here
  ];

  return (
    <Box>
      <Heading>Results</Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Event</Table.ColumnHeader>
            <Table.ColumnHeader>Result</Table.ColumnHeader>
            <Table.ColumnHeader>Competition</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {results.map((result, index) => (
            <Table.Row key={index}>
              <Table.Cell>{result.event}</Table.Cell>
              <Table.Cell>{result.result}</Table.Cell>
              <Table.Cell>{result.competition}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default ResultsTab;
