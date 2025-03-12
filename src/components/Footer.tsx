'use client'

import React from "react";
import {
  Center,
  HStack,
  IconButton,
  Button,
  Image,
  Link,
  VStack
} from "@chakra-ui/react";
import {LuFacebook, LuGithub, LuInstagram, LuTwitter, LuYoutube} from "react-icons/lu";

export default function Footer() {
  return (
    <Center borderTopWidth={3} padding={3}>
      <VStack>
        {/* Social Media Icons */}
        <HStack>

            <Link
                href="https://instagram.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuInstagram/>
              </IconButton>
            </Link>

            <Link
                href="https://facebook.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuFacebook/>
              </IconButton>
            </Link>
            <Link
                href="https://twitter.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuTwitter/>
              </IconButton>
            </Link>
            <Link
                href="https://github.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuGithub/>
              </IconButton>
            </Link>
            <Link
                href="https://youtube.com"
                target="_blank"
                variant="plainLink"
            >
              <IconButton variant="ghost">
                <LuYoutube/>
              </IconButton>
            </Link>
        </HStack>

        {/* Footer Links */}
        <HStack gap={5}>
          <Link href="/">
            <Image src="/static/images/logo.png" alt="WCA Logo" height={50} width={50}/>          
          </Link>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link href="/about" variant="plainLink">About Us</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link href="/faqs" variant="plainLink">FAQs</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link href="/contact" variant="plainLink">Contact</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link
              href="https://github.com"
              target="_blank"
              variant="plainLink"
            >
              GitHub
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link href="/privacy" variant="plainLink">Privacy</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" fontSize="md">
            <Link href="/disclaimer" variant="plainLink">Disclaimer</Link>
          </Button>
        </HStack>
      </VStack>

    </Center>
  );
}
