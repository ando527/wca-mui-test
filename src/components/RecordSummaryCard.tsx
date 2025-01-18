import React from 'react';
import {Box, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const RecordSummaryCard: React.FC = () => {
  return (
    <Box
        bg="#029347"
        rounded="md"
        id="record-summary-card"
    >
      <StatRoot>
        <StatLabel>Record Collection</StatLabel>
        <StatValueText>
          4 <StatValueUnit>World</StatValueUnit>
          11 <StatValueUnit>Continental</StatValueUnit>
          5 <StatValueUnit>National</StatValueUnit>
        </StatValueText>
      </StatRoot>
    </Box>
  );
};

export default RecordSummaryCard;
