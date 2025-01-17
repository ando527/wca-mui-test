import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import ResultsTab from './ResultsTab';
import CompetitionsTab from './CompetitionsTab';
import RecordsTab from './RecordsTab';
import ChampionshipPodiumsTab from './ChampionshipPodiumsTab';
import MapTab from './MapTab';

const TabsComponent: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: 3 }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Results" />
        <Tab label="Competitions" />
        <Tab label="Records" />
        <Tab label="Championship Podiums" />
        <Tab label="Map" />
      </Tabs>
      <Box sx={{ marginTop: 3 }}>
        {value === 0 && <ResultsTab />}
        {value === 1 && <CompetitionsTab />}
        {value === 2 && <RecordsTab />}
        {value === 3 && <ChampionshipPodiumsTab />}
        {value === 4 && <MapTab />}
      </Box>
    </Box>
  );
};

export default TabsComponent;
