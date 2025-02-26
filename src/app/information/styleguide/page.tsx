import * as React from 'react';
import {Button, Heading, Text, For, HStack, Container, VStack} from "@chakra-ui/react";

const buttonVariants = ['solid', 'ghost', 'outline', 'plain', 'subtle'];
const wcaColors = ["blue", "green", "red", "orange", "yellow"];

export default function Home() {
  return (
    <Container maxWidth="2xl">
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
        <VStack gap="2" align="flex-start">
            <Heading size="md">Subheading (S2) - "md"</Heading>
            <Heading size="lg">Subheading (S1) - "lg"</Heading>
            <Heading size="2xl">Heading (H4) - "2xl"</Heading>
            <Heading size="3xl">Heading (H3) - "3xl"</Heading>
            <Heading size="4xl">Heading (H2) - "4xl"</Heading>
            <Heading size="5xl">Heading (H1) - "5xl"</Heading>
        </VStack>
      </VStack>
    </Container>
    );
}
