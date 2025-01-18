import React from 'react';
import {Card, Heading, Stack} from "@chakra-ui/react";

const CompetitionsTab: React.FC = () => {
  const competitions = [
    { name: 'Nationals 2022', location: 'Sydney, Australia', date: 'July 10, 2022' },
    { name: 'Regionals 2023', location: 'Melbourne, Australia', date: 'March 5, 2023' },
    // Add more competitions here
  ];

  return (
    <>
      <Heading>Competitions</Heading>
      <Stack>
        {competitions.map((competition, index) => (
          <Card.Root key={index}>
            <Card.Body>
              <Card.Title>
                {competition.name}
              </Card.Title>
              <Card.Description>
                {competition.location} - {competition.date}
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Stack>
    </>
  );
};

export default CompetitionsTab;
