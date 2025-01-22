import * as React from 'react';
import ProfileCard from '@/components/ProfileCard';
import PersonalRecordsTable from '@/components/PersonalRecordsTable';
import MedalSummaryCard from '@/components/MedalSummaryCard';
import RecordSummaryCard from '@/components/RecordSummaryCard';
import TabsComponent from '@/components/Tabs';
import { GridItem, SimpleGrid } from "@chakra-ui/react";

interface RecordItem {
  event: string;
  snr: number;
  scr: number;
  swr: number;
  single: number;
  average: number;
  anr: number;
  acr: number;
  awr: number;
}

const transformPersonalRecords = (personalRecords: any): RecordItem[] => {
  const eventOrder = [
    "333", "222", "444", "555", "666", "777",
    "333bf", "333fm", "333oh",
    "clock", "minx", "pyram", "skewb", "sq1",
    "444bf", "555bf", "333mbf", "magic", "mmagic", "333mbo",
  ];

  // Helper function to decode 333mbf results
  const decode333mbf = (result: number): string => {
    const resultStr = result.toString();
    const isOldFormat = resultStr.startsWith("1");

    if (isOldFormat) {
      const SS = parseInt(resultStr.slice(1, 3));
      const AA = parseInt(resultStr.slice(3, 5));
      const TTTTT = parseInt(resultStr.slice(5));

      const solved = 99 - SS;
      const attempted = AA;
      const timeInSeconds = TTTTT === 99999 ? "Unknown" : secToMin(TTTTT);

      return `${solved}/${attempted} ${timeInSeconds}`;
    } else {
      const DD = parseInt(resultStr.slice(0, 2));
      const TTTTT = parseInt(resultStr.slice(2, 7));
      const MM = parseInt(resultStr.slice(7, 9));

      const difference = 99 - DD;
      const missed = MM;
      const solved = difference + missed;
      const attempted = solved + missed;
      const timeInSeconds = TTTTT === 99999 ? "Unknown" : secToMin(TTTTT);

      return `${solved}/${attempted} ${timeInSeconds}`;
    }
  };

  // Helper function to format results (including 333fm averages)
  const formatResult = (event: string, result: number): string => {
    if (event === "333fm") {
      if (result <= 99) {
        // For single results (number of moves)
        return result.toString();
      }
    }

    if (result > 5999) {
      const minutes = Math.floor(result / 6000);
      const seconds = ((result % 6000) / 100).toFixed(2);
      return `${minutes}:${seconds.padStart(5, "0")}`; // Ensures two decimal places
    }
    return (result / 100).toFixed(2); // Converts centiseconds to seconds
  };

  // Helper function to convert seconds to mm:ss format
  const secToMin = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const paddedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${minutes}:${paddedSeconds}`;
  };

  // Transform the personalRecords object into an array
  const recordsArray = Object.entries(personalRecords).map(
    ([event, record]: [string, any]) => ({
      event,
      single:
        event === "333mbf"
          ? decode333mbf(record.single.best)
          : formatResult(event, record.single.best),
      snr: record.single.world_rank,
      scr: record.single.continent_rank,
      swr: record.single.country_rank,
      average:
        record.average && record.average.best > 0
          ? formatResult(event, record.average.best)
          : "",
      anr: record.average?.country_rank || 0,
      acr: record.average?.continent_rank || 0,
      awr: record.average?.world_rank || 0,
    })
  );

  // Reorder the array based on eventOrder
  return eventOrder
    .map((event) => recordsArray.find((record) => record.event === event))
    .filter((record): record is RecordItem => !!record); // Remove undefined items
};





export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  // Fetch data from your API
  const response = await fetch(`https://www.worldcubeassociation.org/api/v0/persons/${slug}`, {
    cache: 'no-store', // Ensures fresh data on every request
  });

  // Handle fetch errors
  if (!response.ok) {
    return <div>Error: Unable to fetch data for {slug}</div>;
  }

  const data = await response.json();

  let roles: { teamRole: string; teamText: string; staffColor: string }[] = [];

  data.person.teams.forEach((team: { friendly_id: string; leader: boolean; senior_member: boolean; })=> {
    let teamText = team.friendly_id.toUpperCase();
    let teamRole = "";
    let staffColour = "black";

    if (teamText == "BOARD"){
        staffColour = "black";
    } else if (team.leader == true){
        teamRole = "LEADER";
        staffColour = "blue";
    } else {
        if (team.senior_member == true){
            teamRole = "SENIOR MEMBER";
            staffColour = "yellow";
        } else {
            staffColour = "green";
            teamRole = "MEMBER";
        }
    }

    roles.push({ teamRole: teamRole, teamText: teamText, staffColor: staffColour });

});

if (data.person.delegate_status != null){
    let delegateText = data.person.delegate_status.toUpperCase().replace(/_/g, ' ').replace("DELEGATE", "");
    roles.push({ teamRole: "DELEGATE", teamText: delegateText, staffColor: "red" });
  };

  let genderText = "Male";
  if (data.person.gender == "f"){
    genderText = "Female";
  } else if (data.person.gender == "o"){
    genderText = "o";
  }

  // Handle case where no data is returned
  if (!data || data.length === 0) {
    return <div>No results found for {slug}</div>;
  }

  return (
    <SimpleGrid gap={5} columns={12} padding={5}>
        {/* Profile Section */}
        <GridItem colSpan={3} h="80lvh">
        <ProfileCard
          name={data.person.name}
          profilePicture={data.person.avatar.url}
          roles={roles}
          wcaId={slug}
          gender={genderText}
          region={data.person.country.name}
          competitions={data.competition_count}
          completedSolves={1659}
        />
        </GridItem>

        {/* Records and Medals */}
        <GridItem colSpan={9}>
          <PersonalRecordsTable records={transformPersonalRecords(data.personal_records)}/>
          <SimpleGrid gap={5} columns={6} padding={5}>
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

        </GridItem>

        
      </SimpleGrid>
  );
}
