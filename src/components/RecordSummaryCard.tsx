import React from 'react';
import {Box, Card, Center, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const RecordSummaryCard: React.FC = () => {
  return (
    <Card.Root bg="wcagreen.solid" color="wcagreen.contrast">
      <Card.Body>
        <Card.Title>Record Collection</Card.Title>
        <StatRoot size="lg">
          <StatValueText alignItems="baseline">
            4 <StatValueUnit  color="wcagreen.contrast">World</StatValueUnit>
            11 <StatValueUnit  color="wcagreen.contrast">Continental</StatValueUnit>
            5 <StatValueUnit  color="wcagreen.contrast">National</StatValueUnit>
          </StatValueText>
        </StatRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default RecordSummaryCard;
