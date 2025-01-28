import React from 'react';
import { Box, Card } from "@chakra-ui/react";
import { StatLabel, StatRoot, StatValueText, StatValueUnit } from "@/components/ui/stat";

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
        <StatRoot size="lg">
          <StatValueText alignItems="baseline">
            {gold > 0 && (
              <>
                {gold} <StatValueUnit>Gold</StatValueUnit>
              </>
            )}
            {silver > 0 && (
              <>
                {silver} <StatValueUnit>Silver</StatValueUnit>
              </>
            )}
            {bronze > 0 && (
              <>
                {bronze} <StatValueUnit>Bronze</StatValueUnit>
              </>
            )}
          </StatValueText>
        </StatRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default MedalSummaryCard;
