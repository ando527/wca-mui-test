"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Box, Center, Link as ChakraLink, Image as ChakraImage, Input} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {Button} from "@/components/ui/button";
import {LuCalendar1, LuChartNoAxesColumn, LuCircleHelp, LuGavel, LuGlobe, LuUser} from "react-icons/lu";
import {ColorModeButton} from "@/components/ui/color-mode";
import {Avatar} from "@/components/ui/avatar";

export default function Navbar() {
  const createDropdown = (
    label: string,
    items: { name: string; icon: React.ReactNode, href: string }[]
  ) => (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button aria-haspopup="true">
          {label}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {items.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.icon}
            <ChakraLink asChild>
              <Link href={item.href}>
                {item.name}
              </Link>
            </ChakraLink>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );

  return (
    <Box color="default">
      <Center>
        {/* Left Section: Logo + Menu Items */}
        <Box>
          {/* Logo */}
          <Center>
            <ChakraLink asChild>
              <Link href={'/'} passHref>
                <ChakraImage asChild>
                  <Image src="/static/images/logo.png" alt="Logo" width={40} height={40} />
                </ChakraImage>
              </Link>
            </ChakraLink>
          </Center>

          {/* Menu Items */}
          <Button>About Us</Button>
          {createDropdown("Competitions", [
            { name: "All", icon: <LuCalendar1 />, href: "#"},
            { name: "My Competitions", icon: <LuCalendar1 /> , href: "#"},
          ])}
          {createDropdown("Results", [
            { name: "Rankings", icon: <LuChartNoAxesColumn /> , href: "#"},
            { name: "Records", icon: <LuChartNoAxesColumn /> , href: "#"},
            { name: "Persons", icon: <LuUser />, href: "#" },
            { name: "My Results", icon: <LuChartNoAxesColumn />, href: "/results" },
            { name: "Statistics", icon: <LuChartNoAxesColumn />, href: "#" },
            { name: "Multimedia", icon: <LuChartNoAxesColumn />, href: "#" },
            { name: "Results Export", icon: <LuChartNoAxesColumn />, href: "#" },
            { name: "Developer Export", icon: <LuChartNoAxesColumn /> , href: "#"},
          ])}
          {createDropdown("Regulations", [
            { name: "About the Regulations", icon: <LuGavel />, href: "#" },
            { name: "Regulations & Guidelines", icon: <LuGavel />, href: "#" },
            { name: "Regulations", icon: <LuGavel />, href: "#" },
            { name: "Guidelines", icon: <LuGavel />, href: "#" },
            { name: "Scrambles", icon: <LuGavel />, href: "#" },
            { name: "Incidents log", icon: <LuGavel /> , href: "#"},
            { name: "Disciplinary log", icon: <LuGavel />, href: "#" },
            { name: "History", icon: <LuGavel /> , href: "#"},
            { name: "Translations", icon: <LuGavel />, href: "#" },
          ])}
          {createDropdown("Information", [
            { name: "About the WCA", icon: <LuCircleHelp />, href: "#" },
            { name: "WCA Documents", icon: <LuCircleHelp /> , href: "/information/documents"},
            { name: "WCA Officers & Board", icon: <LuCircleHelp /> , href: "#"},
            { name: "WCA Delegates", icon: <LuCircleHelp />, href: "#" },
            { name: "Teams, Committees, and Councils", icon: <LuCircleHelp /> , href: "#"},
            { name: "Regional Organizations", icon: <LuCircleHelp /> , href: "#"},
            { name: "Translators", icon: <LuCircleHelp /> , href: "#"},
            { name: "Frequently Asked Questions", icon: <LuCircleHelp /> , href: "/information/faq"},
            { name: "Forum", icon: <LuCircleHelp /> , href: "#"},
            { name: "Educational resources", icon: <LuCircleHelp />, href: "#" },
            { name: "Contact", icon: <LuCircleHelp /> , href: "#"},
            { name: "Speedcubing History", icon: <LuCircleHelp /> , href: "#"},
            { name: "Media Submission", icon: <LuCircleHelp />, href: "#" },
            { name: "Privacy", icon: <LuCircleHelp /> , href: "#"},
            { name: "Disclaimer", icon: <LuCircleHelp />, href: "#" },
            { name: "Tools", icon: <LuCircleHelp /> , href: "#"},
            { name: "Logo", icon: <LuCircleHelp /> , href: "#"},
          ])}
          <Button variant="solid" color="primary">WCA Live</Button>
        </Box>

        {/* Right Section: Search and Avatar */}
        <Center>
          <Input placeholder="Search site" />
          <ColorModeButton />
          <Button>
            <LuGlobe /> English
          </Button>
          {/* Avatar with Profile Menu */}
          <MenuRoot>
            <MenuTrigger>
              <Avatar name="Mitchell Anderson" src="/static/images/avatar/1.jpg" />
            </MenuTrigger>
            <MenuContent>
              {[
                { name: "Name", icon: <LuUser /> },
                { name: "Notifications", icon: <LuUser /> },
                { name: "Edit profile", icon: <LuUser /> },
                { name: "My Competitions", icon: <LuCalendar1 /> },
                { name: "My Results", icon: <LuChartNoAxesColumn /> },
                { name: "Staff panel", icon: <LuUser /> },
                { name: "Delegate panel", icon: <LuUser /> },
                { name: "Polls", icon: <LuUser /> },
                { name: "Manage users", icon: <LuUser /> },
                { name: "New Competition", icon: <LuChartNoAxesColumn /> },
                { name: "Manage your applications", icon: <LuUser /> },
                { name: "Manage authorized applications", icon: <LuUser /> },
                { name: "Sign out", icon: <LuUser /> },
              ].map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.icon}
                    {item.name}
                  </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>
        </Center>
      </Center>
    </Box>
  );
}
