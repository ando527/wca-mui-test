import React from 'react';
import {Table, Text, Link} from "@chakra-ui/react";
import { LuBadgePlus, LuHourglass, LuBadgeX, LuBadgeAlert } from 'react-icons/lu';


interface Comps {
    name: string;
    id: string;
    dateStart: Date;
    dateEnd: Date;
    city: string;
    country: string;
    regoStatus: string;
}

const regoStatusIcons: Record<string, TSX.Element> = {
    open: <LuBadgePlus/>,
    notOpen: <LuHourglass/>,
    closed: <LuBadgeX />,
    full: <LuBadgeAlert />,
  };

interface CompsProps {
    comp: Comps;
}

function formatDateRange(start: Date, end: Date): string {
    const sameDay = start.toDateString() === end.toDateString();
  
    // Formatters
    const dayFormatter = new Intl.DateTimeFormat('en-US', { day: 'numeric' });
    const monthDayFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
    const fullFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  
    if (sameDay) {
      return fullFormatter.format(start);
    }
  
    const sameMonth = start.getMonth() === end.getMonth();
    const sameYear = start.getFullYear() === end.getFullYear();
  
    if (sameMonth && sameYear) {
      return `${monthDayFormatter.format(start)} - ${dayFormatter.format(end)}, ${start.getFullYear()}`;
    }
  
    if (sameYear) {
      return `${monthDayFormatter.format(start)} - ${monthDayFormatter.format(end)}, ${start.getFullYear()}`;
    }
  
    return `${fullFormatter.format(start)} - ${fullFormatter.format(end)}`;
  }
  

const CompetitionTableEntry: React.FC<CompsProps> = ({ comp }) => {
    console.log({comp});
    return (
        <Table.Row bg="bg.inverted">
            <Table.Cell>
                {regoStatusIcons[comp.regoStatus] || null}
            </Table.Cell>
            <Table.Cell>
            <Text>{formatDateRange(comp.dateStart, comp.dateEnd)}</Text>
            </Table.Cell>
            <Table.Cell>
                <Link hoverArrow href="{}">{comp.name}</Link>
            </Table.Cell>
            <Table.Cell>
                <Text>{comp.city}</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>{comp.country}</Text>
            </Table.Cell>
            <Table.Cell>
                <Text>{comp.country}</Text>
            </Table.Cell>
        </Table.Row>
    );
}

export default CompetitionTableEntry;