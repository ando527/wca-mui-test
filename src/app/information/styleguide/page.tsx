import * as React from 'react';
import {Button, Center, Heading, Flex, Stack, Text, For} from "@chakra-ui/react";

const buttonVariants = ['solid', 'ghost', 'outline', 'plain', 'subtle'];
const wcaColors = ["wcablue", "wcagreen", "wcared", "wcaorange", "wcayellow"];

export default function Home() {
  return (
    <Center>
      <Stack maxW="2xl">
        {/* Page Title */}
        <Heading>
          STYLE GUIDE
        </Heading>
        <For each={buttonVariants}>
          {(buttonVariant, index) => (
              <React.Fragment key={`button-variant-${index}`}>
                <Text>Buttons: {buttonVariant}</Text>
                <Flex gap="2">
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
                </Flex>
              </React.Fragment>
          )}
        </For>
      </Stack>
    </Center>
    );
}
