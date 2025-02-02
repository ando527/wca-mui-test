import React from 'react';

import ResultsTab from './ResultsTab';
import CompetitionsTab from './CompetitionsTab';
import RecordsTab from './RecordsTab';
import ChampionshipPodiumsTab from './ChampionshipPodiumsTab';
import MapTab from './MapTab';
import {Tabs} from "@chakra-ui/react";

interface dataPropsIn {
  data: any; // Replace 'any' with a stricter type if needed
}

const TabsComponent: React.FC<dataPropsIn> = ({ data }) => {
  return (
    <Tabs.Root defaultValue="results" fitted>
      <Tabs.List>
        <Tabs.Trigger value="results">Results</Tabs.Trigger>
        <Tabs.Trigger value="competitions">Competitions</Tabs.Trigger>
        <Tabs.Trigger value="records">Records</Tabs.Trigger>
        <Tabs.Trigger value="championship-podiums">Championship Podiums</Tabs.Trigger>
        <Tabs.Trigger value="map">Map</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="results"><ResultsTab results={data.results} /></Tabs.Content>
      <Tabs.Content value="competitions"><CompetitionsTab /></Tabs.Content>
      <Tabs.Content value="records"><RecordsTab /></Tabs.Content>
      <Tabs.Content value="championship-podiums"><ChampionshipPodiumsTab /></Tabs.Content>
      <Tabs.Content value="map"><MapTab /></Tabs.Content>
    </Tabs.Root>
  );
};

export default TabsComponent;
