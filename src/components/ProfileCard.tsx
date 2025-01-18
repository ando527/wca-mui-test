import React from 'react';
import {Badge, Card, Center, VStack} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar";
import {DataListItem, DataListRoot} from "@/components/ui/data-list";

const ProfileCard: React.FC = () => {
  return (
    <Card.Root>
      <Card.Header>
        <Center>
          {/* Profile Picture */}
          <Avatar src="/static/images/ma.jpg" size="2xl" />
        </Center>
      </Card.Header>

      <Card.Body>
        <Card.Title>
          Mitchell Anderson
          <VStack>
            <Badge color="success">WST Member</Badge>
            <Badge color="error">Junior Delegate</Badge>
          </VStack>
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
