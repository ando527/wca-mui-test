import React from 'react';
import {Stat, Card, Flex, Heading, Text, Float, Icon} from "@chakra-ui/react";
import {LuMedal} from "react-icons/lu";

interface MedalSummaryCardProps {
  gold: number;
  silver: number;
  bronze: number;
}

const MedalSummaryCard: React.FC<MedalSummaryCardProps> = ({ gold, silver, bronze }) => {
  return (
    <Card.Root bg="yellow.solid" color="yellow.contrast" shadow="wca" border="none" overflow="hidden">
      <Float placement="middle-end" offsetX="8">
              <Icon fontSize="10rem" color="yellow.100" opacity="0.3">
                <LuMedal />
              </Icon>
            </Float>
      <Card.Body>
        <Card.Title><Text fontSize="md" textTransform="uppercase" fontWeight="medium" letterSpacing="wider">Medal Collection</Text></Card.Title>
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
