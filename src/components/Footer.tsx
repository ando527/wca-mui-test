'use client'

import React from "react";
import {
  Center,
  HStack,
  IconButton,
  Button,
  Image,
  Link as ChakraLink,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import {LuFacebook, LuGithub, LuInstagram, LuTwitter, LuYoutube} from "react-icons/lu";

export default function Footer() {
  return (
    <Center borderTopWidth={3} padding={3}>
      <VStack>
        {/* Social Media Icons */}
        <HStack>
            <ChakraLink asChild variant="plainLink">
              <Link
                  href="https://instagram.com"
                  target="_blank"
                  
              >
                <IconButton variant="ghost">
                  <LuInstagram/>
                </IconButton>
              </Link>
            </ChakraLink>
            <ChakraLink asChild variant="plainLink">
            <Link
                href="https://facebook.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuFacebook/>
              </IconButton>
            </Link>
            </ChakraLink>
            <ChakraLink asChild variant="plainLink">
            <Link
                href="https://twitter.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuTwitter/>
              </IconButton>
            </Link>
            </ChakraLink>
            <ChakraLink asChild variant="plainLink">
            <Link
                href="https://github.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuGithub/>
              </IconButton>
            </Link>
            </ChakraLink>
            <ChakraLink asChild variant="plainLink">
            <Link
                href="https://youtube.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuYoutube/>
              </IconButton>
            </Link>
            </ChakraLink>
        </HStack>

        {/* Footer Links */}
        <HStack gap={5}>
          <ChakraLink asChild variant="plainLink">
            <Link href="/">
              <Image src="/static/images/logo.png" alt="WCA Logo" height={50} width={50}/>          
            </Link>
          </ChakraLink>
          
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="/about">About Us</Link>
            </ChakraLink>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="/faqs">FAQs</Link>
            </ChakraLink>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="/contact">Contact</Link>
            </ChakraLink>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="https://github.com" target="_blank">GitHub</Link>
            </ChakraLink>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="/privacy">Privacy</Link>
            </ChakraLink>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <ChakraLink asChild variant="plainLink">
              <Link href="/disclaimer">Disclaimer</Link>
            </ChakraLink>
          </Button>
        </HStack>
      </VStack>

    </Center>
  );
}
