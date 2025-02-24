import React from 'react';
import {Stat, Card, StatGroup} from "@chakra-ui/react";

interface MedalSummaryCardProps {
  gold: number;
  silver: number;
  bronze: number;
}

const MedalSummaryCard: React.FC<MedalSummaryCardProps> = ({ gold, silver, bronze }) => {
  return (
    <Card.Root bg="wcayellow.solid" color="wcayellow.contrast" shadow="wca">
      <Card.Body>
        <Card.Title>Medal Collection</Card.Title>
        <StatGroup size="lg">
          {gold > 0 && (
            <Stat.Root>
              <Stat.ValueText>{gold}</Stat.ValueText>
              <Stat.Label>Gold</Stat.Label>
            </Stat.Root>
          )}
          {silver > 0 && (
            <Stat.Root>
              <Stat.ValueText>{silver}</Stat.ValueText>
              <Stat.Label>Silver</Stat.Label>
            </Stat.Root>
          )}
          {bronze > 0 && (
            <Stat.Root>
              <Stat.ValueText>{bronze}</Stat.ValueText>
              <Stat.Label>Bronze</Stat.Label>
            </Stat.Root>
          )}
        </StatGroup>
      </Card.Body>
    </Card.Root>
  );
};

export default MedalSummaryCard;
