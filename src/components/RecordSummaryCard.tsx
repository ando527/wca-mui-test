import React from 'react';
import { Card } from "@chakra-ui/react";
import { Stat, Flex } from "@chakra-ui/react";

interface RecordSummaryCardProps {
  world: number;
  continental: number;
  national: number;
}

const RecordSummaryCard: React.FC<RecordSummaryCardProps> = ({ world, continental, national }) => {
  return (
    <Card.Root bg="green.solid" color="green.contrast" shadow="wca">
      <Card.Body>
        <Card.Title>Record Collection</Card.Title>
        <Flex align="start">
          {world > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
                {world}<Stat.ValueUnit color="green.contrast">World</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {continental > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
                {continental}<Stat.ValueUnit color="green.contrast">Continental</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {national > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
                {national}<Stat.ValueUnit color="green.contrast">National</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default RecordSummaryCard;
