'use client'
import * as React from 'react';
import ProfileCard from '@/components/ProfileCard';
import PersonalRecordsTable from '@/components/PersonalRecordsTable';
import MedalSummaryCard from '@/components/MedalSummaryCard';
import RecordSummaryCard from '@/components/RecordSummaryCard';
import TabsComponent from '@/components/Tabs';
import { GridItem, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
      <SimpleGrid gap={5} columns={6} padding={5}>
        {/* Profile Section */}
        <GridItem colSpan={2}>
          <ProfileCard />
        </GridItem>

        {/* Records and Medals */}
        <GridItem colSpan={4}>
          <PersonalRecordsTable />
        </GridItem>

        {/* Medal and Record Summary */}
        <GridItem colSpan={3}>
          <MedalSummaryCard />
        </GridItem>
        <GridItem colSpan={3}>
          <RecordSummaryCard />
        </GridItem>

        {/* Tabs */}
        <GridItem colSpan={6}>
          <TabsComponent />
        </GridItem>
      </SimpleGrid>
  );
}
