import * as React from 'react';
import {Button, Heading, Text, For, HStack, Container, VStack, Flex, Card, Image} from "@chakra-ui/react";

const buttonVariants = ['solid', 'ghost', 'outline', 'plain', 'subtle'];
const wcaColors = ["blue", "green", "red", "orange", "yellow"];

export default function Home() {
  return (
    <Container maxWidth="breakpoint-lg">
      {/* Page Title */}
      <Heading>
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
            <Card.Root maxW="sm" overflow="hidden" variant="elevated" colorPalette="green">
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

            <Card.Root maxW="sm" overflow="hidden" variant="elevated" colorPalette="blue">
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

            <Card.Root maxW="sm" overflow="hidden" variant="elevated" colorPalette="yellow">
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

      </VStack>
    </Container>
    );
}
