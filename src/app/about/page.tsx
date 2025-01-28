import * as React from 'react';
import {Grid, GridItem, Heading, Stack, Card, Text, Image } from "@chakra-ui/react";
import { Blockquote } from "@/components/ui/blockquote"

export default function Home() {
  return (
    <Grid gap={5} templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={1}>
            <Stack>
                <Card.Root  bg="bg.inverted" color="fg.inverted" p="0" variant="subtle">
                    <Card.Body>
                        <Heading size="3xl">Who We Are</Heading>
                        <Text>
                        The World Cube Association governs competitions for mechanical puzzles that are operated by twisting groups of pieces, commonly known as 'twisty puzzles'. The most famous of these puzzles is the Rubik's Cube, invented by professor Rubik from Hungary. A selection of these puzzles are chosen as official events of the WCA.
                        </Text><Text pt="1em" pb="1em">    
                        As the WCA has evolved over the past decade, over 200,000 people have competed in our competitions. Despite this growth, we remain an organization that is almost entirely run by volunteers, from local organizers to WCA Delegates to even the WCA Board. We are very grateful to everyone who takes time out of their lives to allow the WCA to function. With more financial support, we hope to bring an even greater level of professionalism to our competitions as we continue to sanction more events across the globe.
                        </Text>
                        <Blockquote showDash cite="WCA Spirit">
                        “Our spirit is that people from all over the world have fun together in a friendly atmosphere, help each other, and behave sportsmanlike.” 
                        </Blockquote>
                    </Card.Body>
                </Card.Root>
            </Stack>
        </GridItem>

        <GridItem colSpan={1}>
            <Stack>
            <Card.Root  bg="bg.inverted" color="fg.inverted" p={0}>
                <Card.Body p={0}>
                    <Image src="/static/images/ma.jpg" ></Image>
                </Card.Body>
            </Card.Root>
            </Stack>
        </GridItem>
    </Grid>
  );
}
