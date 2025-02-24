import * as React from 'react';
import {Button, Center, Heading, Flex, Stack, Text} from "@chakra-ui/react";

export default function Home() {
  return (
    <Center>
      <Stack maxW="2xl">
        {/* Page Title */}
        <Heading>
          STYLE GUIDE
        </Heading>
        <Text>Solid Buttons</Text>
        <Flex gap="2">
            <Button>Default Button</Button> 
            <Button colorPalette="wcagreen">Green Button</Button> 
            <Button colorPalette="wcared">Red Button</Button> 
            <Button colorPalette="wcaorange">Orange Button</Button> 
            <Button colorPalette="wcayellow">Yellow Button</Button> 
        </Flex>

        <Text>Ghost Buttons</Text>
        <Flex gap="2">
            <Button variant="ghost">Default Button</Button> 
            <Button colorPalette="wcagreen" variant="ghost">Green Button</Button> 
            <Button colorPalette="wcared" variant="ghost">Red Button</Button> 
            <Button colorPalette="wcaorange" variant="ghost">Orange Button</Button> 
            <Button colorPalette="wcayellow" variant="ghost">Yellow Button</Button> 
        </Flex>

        <Text>Outline Buttons</Text>
        <Flex gap="2">
            <Button variant="outline">Default Button</Button> 
            <Button colorPalette="wcagreen" variant="outline">Green Button</Button> 
            <Button colorPalette="wcared" variant="outline">Red Button</Button> 
            <Button colorPalette="wcaorange" variant="outline">Orange Button</Button> 
            <Button colorPalette="wcayellow" variant="outline">Yellow Button</Button> 
        </Flex>

        <Text>Plain Buttons</Text>
        <Flex gap="2">
            <Button variant="plain">Default Button</Button> 
            <Button colorPalette="wcagreen" variant="plain">Green Button</Button> 
            <Button colorPalette="wcared" variant="plain">Red Button</Button> 
            <Button colorPalette="wcaorange" variant="plain">Orange Button</Button> 
            <Button colorPalette="wcayellow" variant="plain">Yellow Button</Button> 
        </Flex>


        <Text>Subtle Buttons</Text>
        <Flex gap="2">
            <Button variant="subtle">Default Button</Button> 
            <Button colorPalette="wcagreen" variant="subtle">Green Button</Button> 
            <Button colorPalette="wcared" variant="subtle">Red Button</Button> 
            <Button colorPalette="wcaorange" variant="subtle">Orange Button</Button> 
            <Button colorPalette="wcayellow" variant="subtle">Yellow Button</Button> 
        </Flex>
        </Stack>
    </Center>
    );
}
