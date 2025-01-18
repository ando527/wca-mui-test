'use client'

import React from "react";
import {
  Center,
  HStack,
  IconButton,
  Link as ChakraLink,
  Image as ChakraImage,
  VStack
} from "@chakra-ui/react";
import {LuFacebook, LuGithub, LuInstagram, LuTwitter, LuYoutube} from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <Center>
      <VStack>
        {/* Social Media Icons */}
        <HStack>
          <ChakraLink asChild>
            <Link
                href="https://instagram.com"
                target="_blank"
            >
              <IconButton variant="ghost">
                <LuInstagram/>
              </IconButton>
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link
                href="https://facebook.com"
                target="_blank"
            >
              <IconButton variant="ghost">
                <LuFacebook/>
              </IconButton>
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link
                href="https://twitter.com"
                target="_blank"
            >
              <IconButton variant="ghost">
                <LuTwitter/>
              </IconButton>
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link
                href="https://github.com"
                target="_blank"
            >
              <IconButton variant="ghost">
                <LuGithub/>
              </IconButton>
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link
                href="https://youtube.com"
                target="_blank"
            >
              <IconButton variant="ghost">
                <LuYoutube/>
              </IconButton>
            </Link>
          </ChakraLink>
        </HStack>

        {/* Footer Links */}
        <HStack>
          <ChakraImage asChild>
            <Image src="/static/images/logo.png" alt="WCA Logo" height={50} width={50}/>
          </ChakraImage>
          <ChakraLink asChild>
            <Link href="/about">About Us</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link href="/faqs">FAQs</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link href="/contact">Contact</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link href="/privacy">Privacy</Link>
          </ChakraLink>
          <ChakraLink asChild>
            <Link href="/disclaimer">Disclaimer</Link>
          </ChakraLink>
        </HStack>
      </VStack>

    </Center>
  );
}
