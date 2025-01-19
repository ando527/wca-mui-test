import React from 'react';
import {Box, Card, Center, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const RecordSummaryCard: React.FC = () => {
  return (
    <Card.Root bg="green.muted">
      <Card.Body>
        <Card.Title>Record Collection</Card.Title>
        <StatRoot size="lg">
          <StatValueText alignItems="baseline">
            4 <StatValueUnit>World</StatValueUnit>
            11 <StatValueUnit>Continental</StatValueUnit>
            5 <StatValueUnit>National</StatValueUnit>
          </StatValueText>
        </StatRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default RecordSummaryCard;
