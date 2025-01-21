import React from 'react';
import {Card, Table} from "@chakra-ui/react";

const PersonalRecordsTable: React.FC = () => {
  const records = [
    { event: '3x3x3 Cube', nr: 318, cr: 410, wr: 9129, single: '8.87', average: '11.05' },
    { event: '2x2x2 Cube', nr: 8, cr: 439, wr: 8059, single: '2.18', average: '4.01' },
    // Add more records as needed...
  ];

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
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {records.map((record, index) => (
                <Table.Row key={index} bg="bg.inverted">
                  <Table.Cell color="fg.inverted">{record.event}</Table.Cell>
                  <Table.Cell color={record.nr < 11 ? "wcagreen.solid" : "fg.inverted"} fontWeight={record.nr < 11 ? "600" : "400"}>{record.nr}</Table.Cell>
                  <Table.Cell color={record.cr < 11 ? "wcagreen.solid" : "fg.inverted"} fontWeight={record.cr < 11 ? "600" : "400"}>{record.cr}</Table.Cell>
                  <Table.Cell color={record.wr < 11 ? "wcagreen.solid" : "fg.inverted"} fontWeight={record.wr < 11 ? "600" : "400"}>{record.wr}</Table.Cell>
                  <Table.Cell color="fg.inverted">{record.single}</Table.Cell>
                  <Table.Cell color="fg.inverted">{record.average}</Table.Cell>
                </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Body>
    </Card.Root>
  );
};

export default PersonalRecordsTable;
