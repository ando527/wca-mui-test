import React from 'react';
import { Card } from "@chakra-ui/react";
import { Stat, StatGroup } from "@chakra-ui/react";

interface RecordSummaryCardProps {
  world: number;
  continental: number;
  national: number;
}

const RecordSummaryCard: React.FC<RecordSummaryCardProps> = ({ world, continental, national }) => {
  return (
    <Card.Root bg="wcagreen.solid" color="wcagreen.contrast" shadow="wca">
      <Card.Body>
        <Card.Title>Record Collection</Card.Title>
        <StatGroup size="lg">
          {world > 0 && (
            <Stat.Root>
              <Stat.ValueText>{world}</Stat.ValueText>
              <Stat.Label color="wcagreen.contrast">World</Stat.Label>
            </Stat.Root>
          )}
          {continental > 0 && (
            <Stat.Root>
              <Stat.ValueText>{continental}</Stat.ValueText>
              <Stat.Label color="wcagreen.contrast">Continental</Stat.Label>
            </Stat.Root>
          )}
          {national > 0 && (
            <Stat.Root>
              <Stat.ValueText>{national}</Stat.ValueText>
              <Stat.Label color="wcagreen.contrast">National</Stat.Label>
            </Stat.Root>
          )}
        </StatGroup>
      </Card.Body>
    </Card.Root>
  );
};

export default RecordSummaryCard;
