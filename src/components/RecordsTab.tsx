import React from 'react';
import {Box, Card, Heading, Stack} from "@chakra-ui/react";

const RecordsTab: React.FC = () => {
  const records = [
    { event: '3x3x3 Cube', record: 'World Record: 8.87' },
    { event: '2x2x2 Cube', record: 'National Record: 2.18' },
    // Add more records here
  ];

  return (
    <>
      <Heading>Records</Heading>
      <Stack>
        {records.map((record, index) => (
          <Card.Root key={index}>
            <Card.Body>
              {record.event}
            </Card.Body>
            <Card.Footer>
              {record.record}
            </Card.Footer>
          </Card.Root>
        ))}
      </Stack>
    </>
  );
};

export default RecordsTab;
