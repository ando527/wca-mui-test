import React from 'react';
import { Card } from "@chakra-ui/react";
import { StatRoot, StatValueText, StatValueUnit } from "@/components/ui/stat";

interface RecordSummaryCardProps {
  world: number;
  continental: number;
  national: number;
}

const RecordSummaryCard: React.FC<RecordSummaryCardProps> = ({ world, continental, national }) => {
  return (
    <Card.Root bg="wcagreen.solid" color="wcagreen.contrast" shadow="wca">
      <Card.Body>
        <Card.Title>Record Collection</Card.Title>
        <StatRoot size="lg">
          <StatValueText alignItems="baseline">
            {world > 0 && (
              <>
                {world} <StatValueUnit color="wcagreen.contrast">World</StatValueUnit>
              </>
            )}
            {continental > 0 && (
              <>
                {continental} <StatValueUnit color="wcagreen.contrast">Continental</StatValueUnit>
              </>
            )}
            {national > 0 && (
              <>
                {national} <StatValueUnit color="wcagreen.contrast">National</StatValueUnit>
              </>
            )}
          </StatValueText>
        </StatRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default RecordSummaryCard;
