import React from 'react';
import {Stat, Card, StatGroup, Float, Icon} from "@chakra-ui/react";
import {LuMedal} from "react-icons/lu";

interface MedalSummaryCardProps {
  gold: number;
  silver: number;
  bronze: number;
}

const MedalSummaryCard: React.FC<MedalSummaryCardProps> = ({ gold, silver, bronze }) => {
  return (
    <Card.Root colorPalette="yellow" variant="hero" overflow="hidden">
      <Float placement="middle-end" offsetX="8">
        <Icon fontSize="10rem" color="colorPalette.400">
          <LuMedal />
        </Icon>
      </Float>
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
