import React, { useState } from "react";
import {
  Box,
  Tabs,
  Heading,
  Table,
  Icon,
} from "@chakra-ui/react";


interface ResultsTabProps {
  results: any; // Replace 'any' with a stricter type if needed
}

const ResultsTab: React.FC<ResultsTabProps> = ({ results }) => {
  const eventOrder = [
    "333", "222", "444", "555", "666", "777",
    "333bf", "333fm", "333oh",
    "clock", "minx", "pyram", "skewb", "sq1",
    "444bf", "555bf", "333mbf", "magic", "mmagic", "333mbo", "333ft"
  ];

  // Extract and order events based on the data
  const extractedEvents = new Set<string>();
  Object.values(results).forEach((competition: any) => {
    Object.keys(competition).forEach((event: string) => extractedEvents.add(event));
  });

  const orderedEvents = Array.from(extractedEvents).sort(
    (a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)
  );

  // Format time (MM:SS or regular formatting)
  const formatTime = (time: number | null, isFM: boolean = false) => {
    if (time === null) return "-";
    if (isFM) return time.toString();
    if (time > 5999) {
      const minutes = Math.floor(time / 6000);
      const seconds = ((time % 6000) / 100).toFixed(2);
      return `${minutes}:${seconds.padStart(5, "0")}`;
    }
    if (time == -1){
      return "DNF";
    }
    if (time == -2){
      return "DNS";
    }
    return (time / 100).toFixed(2);
  };

  // Render results for a single event
  const renderEventResults = (eventId: string) => {
    const eventResults: any[] = [];
    Object.entries(results).forEach(([competition, events]: [string, any]) => {
      if (events[eventId]) {
        events[eventId].forEach((round: any) => {
          eventResults.push({
            competition,
            round: round.round,
            position: round.position || "-",
            best: round.best || null,
            average: round.average || null,
            solves: round.solves || [],
          });
        });
      }
    });

    return (
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row >
            <Table.ColumnHeader >Competition</Table.ColumnHeader >
            <Table.ColumnHeader >Round</Table.ColumnHeader >
            <Table.ColumnHeader >Position</Table.ColumnHeader >
            <Table.ColumnHeader >Best</Table.ColumnHeader >
            {eventId !== "333mbf" && <Table.ColumnHeader >Average</Table.ColumnHeader >}
            <Table.ColumnHeader >Solves</Table.ColumnHeader >
          </Table.Row >
        </Table.Header>
        <Table.Body>
          {eventResults.map((result, index) => (
            <Table.Row key={index}>
              <Table.Cell>{result.competition}</Table.Cell>
              <Table.Cell>{result.round}</Table.Cell>
              <Table.Cell>{result.position}</Table.Cell>
              <Table.Cell>{formatTime(result.best, eventId === "333fm")}</Table.Cell>
              {eventId !== "333mbf" && <Table.Cell>{formatTime(result.average)}</Table.Cell>}
              <Table.Cell>
                {result.solves.map((solve: number, i: number) => (
                  <span key={i}>
                    {formatTime(solve, eventId === "333fm")}
                    {i < result.solves.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    );
  };

  return (
    <Box>
      <Heading mb={4}>Results</Heading>
      <Tabs.Root defaultValue="333">
        <Tabs.List>
          {orderedEvents.map((event) => (
            <Tabs.Trigger value={event} key={event}>
              <Icon width={25} height={25} fontSize="2xl">
                <i className={`cubing-icon event-${event}`} />
              </Icon>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
          {orderedEvents.map((event) => (
            <Tabs.Content value={event} key={event}>{renderEventResults(event)}</Tabs.Content>
          ))}
      </Tabs.Root>
    </Box>
  );
};

export default ResultsTab;
