'use client'
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ProfileCard from '@/components/ProfileCard';
import PersonalRecordsTable from '@/components/PersonalRecordsTable';
import MedalSummaryCard from '@/components/MedalSummaryCard';
import RecordSummaryCard from '@/components/RecordSummaryCard';
import TabsComponent from '@/components/Tabs';



export default function Home() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {/* Profile Section */}
        <Grid item xs={12} md={4}>
          <ProfileCard />
        </Grid>

        {/* Records and Medals */}
        <Grid item xs={12} md={8}>
          <PersonalRecordsTable />
        </Grid>

        {/* Medal and Record Summary */}
        <Grid item xs={12} md={6}>
          <MedalSummaryCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecordSummaryCard />
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <TabsComponent />
        </Grid>
      </Grid>
    </Box>
  );
}
