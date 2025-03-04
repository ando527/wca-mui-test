import React from 'react';
import {Stat, Card, Heading, Text, Float, Icon, StatGroup} from "@chakra-ui/react";
import {LuMedal} from "react-icons/lu";

interface MedalSummaryCardProps {
  gold: number;
  silver: number;
  bronze: number;
}

const MedalSummaryCard: React.FC<MedalSummaryCardProps> = ({ gold, silver, bronze }) => {
  return (
    <Card.Root variant="hero" colorPalette="yellow" overflow="hidden">
      <Float placement="middle-end" offsetX="8">
              <Icon fontSize="10rem" color="yellow.100" opacity="0.3">
                <LuMedal />
              </Icon>
            </Float>
      <Card.Body>
        <Card.Title><Text fontSize="md" textTransform="uppercase" fontWeight="medium" letterSpacing="wider">Medal Collection</Text></Card.Title>
        <StatGroup justifyContent="start" flexDirection="row" gap="5">
          {gold > 0 && (
            <Stat.Root flex="0">
              <Stat.ValueText alignItems="baseline">
                <Heading size="3xl">{gold}</Heading><Stat.ValueUnit color="yellow.contrast">Gold</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {silver > 0 && (
            <Stat.Root flex="0">
              <Stat.ValueText alignItems="baseline">
              <Heading size="3xl">{silver}</Heading><Stat.ValueUnit color="yellow.contrast">Silver</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
          {bronze > 0 && (
            <Stat.Root flex="0">
              <Stat.ValueText alignItems="baseline">
              <Heading size="3xl">{bronze}</Heading><Stat.ValueUnit color="yellow.contrast">Bronze</Stat.ValueUnit>
              </Stat.ValueText>
            </Stat.Root>
          )}
        </StatGroup>
      </Card.Body>
    </Card.Root>
  );
};

export default MedalSummaryCard;
