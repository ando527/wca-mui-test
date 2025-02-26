import React from 'react';
import {Stat, Card, Flex, Heading} from "@chakra-ui/react";

interface MedalSummaryCardProps {
  gold: number;
  silver: number;
  bronze: number;
}

const MedalSummaryCard: React.FC<MedalSummaryCardProps> = ({ gold, silver, bronze }) => {
  return (
    <Card.Root bg="yellow.solid" color="yellow.contrast" shadow="wca" border="none">
      <Card.Body>
        <Card.Title>Medal Collection</Card.Title>
        <Flex align="start" gap="3">
          {gold > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
                <Heading size="3xl">{gold}</Heading><Stat.ValueUnit color="yellow.contrast">Gold</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {silver > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
              <Heading size="3xl">{silver}</Heading><Stat.ValueUnit color="yellow.contrast">Silver</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {bronze > 0 && (
            <Stat.Root>
              <Stat.ValueText alignItems="baseline">
              <Heading size="3xl">{bronze}</Heading><Stat.ValueUnit color="yellow.contrast">Bronze</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default MedalSummaryCard;
