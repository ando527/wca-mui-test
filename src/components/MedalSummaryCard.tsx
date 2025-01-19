import React from 'react';
import {Box, Card, Center, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const MedalSummaryCard: React.FC = () => {
  return (
    <Card.Root bg="yellow.muted">
      <Card.Body>
        <Card.Title>Medal Collection</Card.Title>
        <StatRoot size="lg">
          <StatValueText alignItems="baseline">
            4 <StatValueUnit>Gold</StatValueUnit>
            11 <StatValueUnit>Silver</StatValueUnit>
            5 <StatValueUnit>Bronze</StatValueUnit>
          </StatValueText>
        </StatRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default MedalSummaryCard;
