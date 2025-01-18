import React from 'react';
import {Badge, Box, Card, Text, VStack, Image as ChakraImage} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar";
import {DataListItem, DataListRoot} from "@/components/ui/data-list";

const ProfileCard: React.FC = () => {
  return (
    <Card.Root>
      {/* Profile Picture */}
      <Avatar src="/static/images/ma.jpg" size="2xl" />

      <Card.Body>
        <Card.Title>
          Mitchell Anderson
          <VStack>
            <Badge color="success">WST Member</Badge>
            <Badge color="error">Junior Delegate</Badge>
          </VStack>
        </Card.Title>
        <Card.Description>
          <DataListRoot orientation="horizontal">
            <DataListItem label="WCA ID" value="2022ANDE01" />
            <DataListItem label="Gender" value="Male" />
            <DataListItem label="Region" value="Australia" />
            <DataListItem label="Competitions" value="48" />
            <DataListItem label="Completed Solves" value="1659" />
          </DataListRoot>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ProfileCard;
