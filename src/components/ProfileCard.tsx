import React from 'react';
import {Badge, Card, Center, HStack, VStack} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar";
import {DataListItem, DataListRoot} from "@/components/ui/data-list";

const ProfileCard: React.FC = () => {
  return (
    <Card.Root bg="bg.inverted" color="fg.inverted">
      <Card.Header>
        <Center>
          {/* Profile Picture */}
          <Avatar src="/static/images/ma.jpg" size="2xl" />
        </Center>
      </Card.Header>

      <Card.Body>
        <Card.Title marginBottom={2}>
          Mitchell Anderson
          <HStack>
            <Badge bg="green.emphasized" rounded="full">WST Member</Badge>
            <Badge bg="red.emphasized" rounded="full">Junior Delegate</Badge>
          </HStack>
        </Card.Title>
        <DataListRoot orientation="horizontal">
          <DataListItem label="WCA ID" value="2022ANDE01" />
          <DataListItem label="Gender" value="Male" />
          <DataListItem label="Region" value="Australia" />
          <DataListItem label="Competitions" value="48" />
          <DataListItem label="Completed Solves" value="1659" />
        </DataListRoot>
      </Card.Body>
    </Card.Root>
  );
};

export default ProfileCard;
