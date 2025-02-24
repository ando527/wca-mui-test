import * as React from 'react';
import {Button, Heading, Text, For, HStack, Container, VStack} from "@chakra-ui/react";

const buttonVariants = ['solid', 'ghost', 'outline', 'plain', 'subtle'];
const wcaColors = ["wcablue", "wcagreen", "wcared", "wcaorange", "wcayellow"];

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
      </VStack>
    </Container>
    );
}
