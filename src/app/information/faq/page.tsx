import * as React from 'react';
import { Box, Heading, Input } from "@chakra-ui/react";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
import { Field } from "@/components/ui/field";

export default function Home() {
  return (
    <Box maxW="lg">
      {/* Page Title */}
      <Heading>
        FREQUENTLY ASKED QUESTIONS
      </Heading>

      {/* FAQ Items */}
      <AccordionRoot collapsible multiple>
        <AccordionItem value="wca-id">
          <AccordionItemTrigger>
            How do I obtain a WCA ID and a WCA profile?
          </AccordionItemTrigger>
          <AccordionItemContent>
            You can obtain a WCA ID and profile by participating in an official WCA competition.
            Once your results are uploaded, your profile will be automatically created.
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="find-competition">
          <AccordionItemTrigger>
            How can I find a WCA competition?
          </AccordionItemTrigger>
          <AccordionItemContent>
            You can find WCA competitions on the official WCA website under the "Competitions" tab.
            There, you can filter competitions by country, date, or type.
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="register">
          <AccordionItemTrigger>
            How can I register for a competition? Who can I refer to if I have problems registering for a competition?
          </AccordionItemTrigger>
          <AccordionItemContent>
            Many competitions do registration right here on the WCA website, but some use their own systems.
            You should contact the organizers of the competition you want to compete in for more details.
            {/* Search for Competition */}
            <Field orientation="horizontal" label="Search for a competition here:">
              <Input placeholder="Search…" />
            </Field>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="requirements">
          <AccordionItemTrigger>
            What are the requirements for attending a WCA competition? What do I need to know before attending a WCA competition?
          </AccordionItemTrigger>
          <AccordionItemContent>
            Familiarize yourself with the WCA regulations and ensure you understand the competition flow. Competitors must bring their
            own cubes and follow the rules.
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="comp-hometown">
          <AccordionItemTrigger>
            How can I have a WCA competition in my hometown?
          </AccordionItemTrigger>
          <AccordionItemContent>
            If you are interested in organizing a competition, it's highly recommended to attend at least one or two competitions as a
            competitor to learn from the experience.

            WCA Competitions must follow the <a href="#">WCA Regulations</a>. After that, the organization team must contact a nearby{' '}
            <a href="#">WCA Delegate</a>. Visit the <a href="#">WCA Competition Organizer Guidelines</a> for further information.
          </AccordionItemContent>
        </AccordionItem>
      </AccordionRoot>
    </Box>
  );
}
