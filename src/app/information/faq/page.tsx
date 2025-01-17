import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from "@mui/icons-material/Search";
import { LocationSearching } from '@mui/icons-material';




export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Page Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        FREQUENTLY ASKED QUESTIONS
      </Typography>

      {/* FAQ Items */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I obtain a WCA ID and a WCA profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can obtain a WCA ID and profile by participating in an official WCA competition.
            Once your results are uploaded, your profile will be automatically created.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I find a WCA competition?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can find WCA competitions on the official WCA website under the "Competitions" tab.
            There, you can filter competitions by country, date, or type.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            How can I register for a competition? Who can I refer to if I have problems registering for a competition?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Many competitions do registration right here on the WCA website, but some use their own systems.
            You should contact the organizers of the competition you want to compete in for more details.
          </Typography>
          {/* Search for Competition */}
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1">Search for a competition here:</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            What are the requirements for attending a WCA competition? What do I need to know before attending a WCA competition?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Familiarize yourself with the WCA regulations and ensure you understand the competition flow. Competitors must bring their
            own cubes and follow the rules.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I have a WCA competition in my hometown?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you are interested in organizing a competition, it's highly recommended to attend at least one or two competitions as a
            competitor to learn from the experience.
          </Typography>
          <Typography sx={{ marginTop: 2 }}>
            WCA Competitions must follow the <a href="#">WCA Regulations</a>. After that, the organization team must contact a nearby{' '}
            <a href="#">WCA Delegate</a>. Visit the <a href="#">WCA Competition Organizer Guidelines</a> for further information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
