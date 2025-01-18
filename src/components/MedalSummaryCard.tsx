import React from 'react';
import {Box, Center, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const MedalSummaryCard: React.FC = () => {
  return (
    <Box
      bg="#FFD313"
      rounded="md"
    >
      <Center>
        <StatRoot maxW="lg">
          <StatLabel>Medal Collection</StatLabel>
          <StatValueText alignItems="baseline">
            4 <StatValueUnit>Gold</StatValueUnit>
            11 <StatValueUnit>Silver</StatValueUnit>
            5 <StatValueUnit>Bronze</StatValueUnit>
          </StatValueText>
        </StatRoot>
      </Center>
    </Box>
  );
};

export default MedalSummaryCard;
