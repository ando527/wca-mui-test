import * as React from 'react';
import {Button, Heading, Text, For, HStack, Container, VStack, Flex, Card, Image, Input, Alert, Separator, Badge, Box, Link, Wrap} from "@chakra-ui/react";
import {AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot} from "@/components/ui/accordion";
import {Field} from "@/components/ui/field";

import MedalSummaryCard from '@/components/MedalSummaryCard';
import RecordSummaryCard from '@/components/RecordSummaryCard';

import { LuExternalLink } from "react-icons/lu"
import {LuMedal} from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";
import { LuStar } from "react-icons/lu";



import { GridItem, SimpleGrid } from "@chakra-ui/react";


const buttonVariants = ['solid', 'ghost', 'outline', 'plain', 'subtle'];
const wcaColors = ["blue", "green", "red", "orange", "yellow"];

export default function Home() {
  return (
    <Container maxWidth="breakpoint-lg">
      {/* Page Title */}
      <Heading size="5xl">
        STYLE GUIDE
      </Heading>
      <VStack>
        <For each={buttonVariants}>
          {(buttonVariant, index) => (
            <React.Fragment key={`button-variant-${index}`}>
              <Text>Buttons: {buttonVariant}</Text>
              <HStack justify="space-between">
                <For each={wcaColors} >
                  {(wcaColor, index) => (
                    <Button
                      key={`button-variant-${buttonVariant}-${index}`}
                      variant={buttonVariant}
                      colorPalette={wcaColor}
                    >
                      {wcaColor.replace("wca", "").toLowerCase()}
                    </Button>
                  )}
                </For>
              </HStack>
            </React.Fragment>
          )}
        </For>
        <Text>Heading Styles</Text>
        <VStack gap="2" align="flex-start">
            <Heading size="md">Subheading (S2) - "md"</Heading>
            <Heading size="lg">Subheading (S1) - "lg"</Heading>
            <Heading size="2xl">Heading (H4) - "2xl"</Heading>
            <Heading size="3xl">Heading (H3) - "3xl"</Heading>
            <Heading size="4xl">Heading (H2) - "4xl"</Heading>
            <Heading size="5xl">Heading (H1) - "5xl"</Heading>
        </VStack>

        <Text >Hero Profile Info</Text>
        <Flex gap="2">
            <Card.Root maxW="sm" overflow="hidden" variant="hero" colorPalette="green">
                <Image
                    src="https://avatars.worldcubeassociation.org/uploads/user/avatar/2014PRID01/1651581622.PNG"
                    alt="Ethan Pride Profile Photo"
                    aspectRatio="landscape"
                />
                <Card.Body gap="2">
                    <Heading size="2xl" textTransform="uppercase">Ethan Pride</Heading>
                    <Flex align="center" gap="1.5">
                        <Image 
                        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1e6-1f1fa.svg"
                        alt="AUS Flag"
                        height="1.2rem"
                        />
                        <Text textStyle="sm" fontWeight="medium">Australia</Text>
                    </Flex>
                </Card.Body>
            </Card.Root>

            <Card.Root maxW="sm" overflow="hidden" variant="hero" colorPalette="blue">
                <Image
                    src="https://avatars.worldcubeassociation.org/uploads/user/avatar/2019JARM01/1686450645.jpg"
                    alt="Kerri Jarman Profile Photo"
                    aspectRatio="landscape"
                />
                <Card.Body gap="2">
                    <Heading size="2xl" textTransform="uppercase">Kerrie Jarman</Heading>
                    <Flex align="center" gap="1.5">
                        <Image 
                        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1e6-1f1fa.svg"
                        alt="AUS Flag"
                        height="1.2rem"
                        />
                        <Text textStyle="sm" fontWeight="medium">Australia</Text>
                    </Flex>
                </Card.Body>
            </Card.Root>

            <Card.Root maxW="sm" overflow="hidden" variant="hero" colorPalette="yellow">
                <Image
                    src="https://avatars.worldcubeassociation.org/uploads/user/avatar/2016SILV08/1713202675.jpg"
                    alt="Nick Silvestri Profile Photo"
                    aspectRatio="landscape"
                />
                <Card.Body gap="2">
                    <Heading size="2xl" textTransform="uppercase">Nick Silvestri</Heading>
                    <Flex align="center" gap="1.5">
                        <Image 
                        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1fa-1f1f8.svg"
                        alt="USA Flag"
                        height="1.2rem"
                        />
                        <Text textStyle="sm" fontWeight="medium">United States</Text>
                    </Flex>
                </Card.Body>
            </Card.Root>
        </Flex>

        <Text>Sample FAQs (Accordion)</Text>
        <AccordionRoot multiple collapsible variant="subtle" width="full">
          <AccordionItem value="wca-id">
            <AccordionItemTrigger colorPalette="blue">
              How do I obtain a WCA ID and a WCA profile?
            </AccordionItemTrigger>
            <AccordionItemContent>
              You can obtain a WCA ID and profile by participating in an official WCA competition.
              Once your results are uploaded, your profile will be automatically created.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="find-competition">
            <AccordionItemTrigger colorPalette="blue">
              How can I find a WCA competition?
            </AccordionItemTrigger>
            <AccordionItemContent>
              You can find WCA competitions on the official WCA website under the "Competitions" tab.
              There, you can filter competitions by country, date, or type.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="register">
            <AccordionItemTrigger colorPalette="blue">
              How can I register for a competition? Who can I refer to if I have problems registering for a
              competition?
            </AccordionItemTrigger>
            <AccordionItemContent>
              Many competitions do registration right here on the WCA website, but some use their own systems.
              You should contact the organizers of the competition you want to compete in for more details.
              {/* Search for Competition */}
              <Field orientation="horizontal" label="Search for a competition here:">
                <Input placeholder="Search…"/>
              </Field>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="requirements">
            <AccordionItemTrigger colorPalette="blue">
              What are the requirements for attending a WCA competition? What do I need to know before attending a WCA
              competition?
            </AccordionItemTrigger>
            <AccordionItemContent>
              Familiarize yourself with the WCA regulations and ensure you understand the competition flow.
              Competitors must bring their
              own cubes and follow the rules.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="comp-hometown">
            <AccordionItemTrigger colorPalette="red">
              How can I have a WCA competition in my hometown?
            </AccordionItemTrigger>
            <AccordionItemContent>
              If you are interested in organizing a competition, it's highly recommended to attend at least one or two
              competitions as a
              competitor to learn from the experience.

              WCA Competitions must follow the <a href="#">WCA Regulations</a>. After that, the organization team must
              contact a nearby{' '}
              <a href="#">WCA Delegate</a>. Visit the <a href="#">WCA Competition Organizer Guidelines</a> for further
              information.
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>

        <Text>Alerts</Text>
        <VStack gap="4" width="full">
            <Alert.Root status="error">
                <Alert.Indicator />
                <Alert.Title>There was an error processing your request</Alert.Title>
            </Alert.Root>

            <Alert.Root status="info">
                <Alert.Indicator />
                <Alert.Title>
                Chakra is going live on August 30th. Get ready!
                </Alert.Title>
            </Alert.Root>

            <Alert.Root status="warning">
                <Alert.Indicator />
                <Alert.Title>
                Seems your account is about expire, upgrade now
                </Alert.Title>
            </Alert.Root>

            <Alert.Root status="success">
                <Alert.Indicator />
                <Alert.Title>Your payment information never reaches the WCA website. It is securely sent to Stripe, which handles the payment process and gets back to us.</Alert.Title>
            </Alert.Root>
        </VStack>
        <Text>Medal and Record Boxes</Text>
        <SimpleGrid gap={5} columns={6} padding={0} pt={5} width="full">
            <GridItem colSpan={3}>
            <MedalSummaryCard
                    gold={4}
                    silver={65}
                    bronze={813}
                />
            </GridItem>
            <GridItem colSpan={3}>
            <RecordSummaryCard
                    world={5}
                    continental={55}
                    national={301}
                />
            </GridItem>
        </SimpleGrid>
        <Text>Basic Box with bento Shadow</Text>
        <Card.Root>
            <Card.Body>
                <Card.Title>
                    Test
                </Card.Title>
                <Card.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Description>
            </Card.Body>
        </Card.Root>
        <Heading size="4xl">Info Boxes</Heading>
        <Heading size="2xl">Header and Text only</Heading>
        <Card.Root variant="info">
            <Card.Body>
                <Card.Title>
                    Test
                </Card.Title>
                <Separator size="md" />
                <Card.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Description>
            </Card.Body>
        </Card.Root>
        <Heading size="2xl">Header, Text and Image with and without Button</Heading>
        <SimpleGrid gap={5} columns={6} padding={0} pt={5} width="full">
        <GridItem colSpan={3}>
                <Card.Root variant="info" colorPalette="red">
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"
                    />
                    <Card.Body>
                        <Card.Title>
                            Test
                        </Card.Title>
                        <Separator size="md" />
                        <Card.Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            </GridItem>
            <GridItem colSpan={3}>
                <Card.Root variant="info">
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="Green double couch with wooden legs"

                    />
                    <Card.Body>
                        <Card.Title>
                            Test Heading
                        </Card.Title>
                        <Separator size="md" />
                        <Card.Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Card.Description>
                        <Button>Test Button</Button>
                    </Card.Body>
                </Card.Root>
            </GridItem>
        </SimpleGrid>
        <Heading size="2xl">Removable Info Box</Heading>
        <Card.Root variant="info"  flexDirection="row" overflow="hidden" >
            <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                maxW="1/3"
            />
            <Box>
                <Card.Body>
                    <Card.Title>
                        Why Compete?
                    </Card.Title>
                    <Separator size="md" />
                    <Card.Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Card.Description>
                    <Button>Test Button</Button>
                </Card.Body>
            </Box>
        </Card.Root>
        <Heading size="2xl">Links</Heading>
        <Text>
        Lorem ipsum dolor sit amet, consectetur <Link hoverArrow="true">adipiscing</Link> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud <Link>exercitation<LuExternalLink /></Link> ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>
        <Heading size="2xl">Profile Achievements</Heading>
        <Wrap maxW="sm">
            <Badge variant="achievement">
                <LuMedal />
                4 Gold Medals
            </Badge>
            <Badge variant="achievement">
                <LuTimer />
                10 Year Career
            </Badge>
            <Badge variant="achievement">
                <LuTrophy />
                Current World Champion
            </Badge>
            <Badge variant="achievement">
                <LuStar />
                Current World Record Holder
            </Badge>
        </Wrap>
      </VStack>
    </Container>
    );
}
