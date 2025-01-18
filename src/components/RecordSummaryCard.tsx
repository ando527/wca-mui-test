import React from 'react';
import {Box, Center, StatValueText} from "@chakra-ui/react";
import {StatLabel, StatRoot, StatValueUnit} from "@/components/ui/stat";

const RecordSummaryCard: React.FC = () => {
  return (
    <Box
      bg="#029347"
      rounded="md"
    >
      <Center>
        <StatRoot maxW="lg">
          <StatLabel>Record Collection</StatLabel>
          <StatValueText alignItems="baseline">
            4 <StatValueUnit>World</StatValueUnit>
            11 <StatValueUnit>Continental</StatValueUnit>
            5 <StatValueUnit>National</StatValueUnit>
          </StatValueText>
        </StatRoot>
      </Center>
    </Box>
  );
};

export default RecordSummaryCard;
