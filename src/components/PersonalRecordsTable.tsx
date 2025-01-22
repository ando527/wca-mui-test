'use client'

import React from 'react';
import {Card, Table} from "@chakra-ui/react";



interface Record {
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

interface RecordsProps {
  records: Record[];
}
const PersonalRecordsTable: React.FC<RecordsProps> = ({ records }) => {

  return (
    <Card.Root bg="bg.inverted" color="fg.inverted">
      <Card.Body>
        <Card.Title>Current Personal Records</Card.Title>
        {/* Tables don't seem to inherit styles correctly, normally all the extra bg and fg shouldn't be necessary */}
        <Table.Root interactive>
          <Table.Header>
            <Table.Row bg="bg.inverted">
              <Table.ColumnHeader color="fg.inverted">Event</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">NR</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">CR</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">WR</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">Single</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">Average</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">WR</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">CR</Table.ColumnHeader>
              <Table.ColumnHeader color="fg.inverted">NR</Table.ColumnHeader>
            </Table.Row>  
          </Table.Header>
          <Table.Body>
            {records.map((record, index) => (
                <Table.Row key={index} bg="bg.inverted">
                  <Table.Cell color="fg.inverted">{record.event}</Table.Cell>
                  <Table.Cell color={record.snr < 11 ? "wcagreen.emphasized" : "fg.inverted" } fontWeight={record.snr < 11 ? "600" : "400"}>{record.snr}</Table.Cell>
                  <Table.Cell color={record.scr < 11 ? "wcagreen.emphasized" : "fg.inverted"} fontWeight={record.scr < 11 ? "600" : "400"}>{record.scr}</Table.Cell>
                  <Table.Cell color={record.swr < 11 ? "wcagreen.emphasized" : "fg.inverted"} fontWeight={record.swr < 11 ? "600" : "400"}>{record.swr}</Table.Cell>
                  <Table.Cell color="fg.inverted" fontWeight={600}>{record.single}</Table.Cell>
                  <Table.Cell color="fg.inverted" fontWeight={600}>{record.average !== 0 ? record.average : ""}</Table.Cell>
                  <Table.Cell
                    color={record.awr !== 0 && record.awr < 11 ? "wcagreen.solid" : "fg.inverted"}
                    fontWeight={record.awr !== 0 && record.awr < 11 ? "600" : "400"}
                  >
                    {record.awr !== 0 ? record.awr : ""}
                  </Table.Cell>                   
                  <Table.Cell
                    color={record.acr !== 0 && record.acr < 11 ? "wcagreen.solid" : "fg.inverted"}
                    fontWeight={record.acr !== 0 && record.acr < 11 ? "600" : "400"}
                  >
                    {record.acr !== 0 ? record.acr : ""}
                  </Table.Cell> 
                  <Table.Cell
                    color={record.anr !== 0 && record.anr < 11 ? "wcagreen.solid" : "fg.inverted"}
                    fontWeight={record.anr !== 0 && record.anr < 11 ? "600" : "400"}
                  >
                    {record.anr !== 0 ? record.anr : ""}
                  </Table.Cell>            
                </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Body>
    </Card.Root>
  );
};

export default PersonalRecordsTable;
