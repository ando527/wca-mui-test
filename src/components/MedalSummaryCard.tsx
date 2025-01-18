import React from 'react';
import {Box, Heading, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const MedalSummaryCard: React.FC = () => {
  return (
    <Box
      bg="#FFD313"
      rounded="md"
      id="medal-summary-card"
    >
      <StatRoot>
        <StatLabel>Medal Collection</StatLabel>
        <StatValueText>
          4 <StatValueUnit>Gold</StatValueUnit>
          11 <StatValueUnit>Silver</StatValueUnit>
          5 <StatValueUnit>Bronze</StatValueUnit>
        </StatValueText>
      </StatRoot>
    </Box>
  );
};

export default MedalSummaryCard;
