"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Button, Link as ChakraLink, Image as ChakraImage, Input, HStack, Group, Icon} from "@chakra-ui/react";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";
import {LuCalendar1, LuChartNoAxesColumn, LuCircleHelp, LuGavel, LuGlobe, LuSearch, LuUser} from "react-icons/lu";
import {ColorModeButton} from "@/components/ui/color-mode";
import {Avatar} from "@/components/ui/avatar";
import {InputGroup} from "@/components/ui/input-group";
import { LuChevronDown } from "react-icons/lu";

export default function Navbar() {
  const createDropdown = (
    label: string,
    items: { name: string; icon: React.ReactNode; href: string }[]
  ) => {
  
    return (
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="ghost" size="sm">
            {label}
            <LuChevronDown></LuChevronDown>
          </Button>
        </MenuTrigger>
        <MenuContent>
          {items.map((item) => (
            
            <MenuItem key={item.name} value={item.name}>
              <Button asChild variant="ghost" size="sm">
              <a href={item.href}>{item.icon}
              {item.name}</a>
               </Button>
            </MenuItem>
            
          ))}
        </MenuContent>
      </MenuRoot>
    );
  };
  

  return (
    <HStack justify="space-between" padding={5} borderBottomWidth={3} bg="bg.muted">
      {/* Left Section: Logo + Menu Items */}
      <HStack>
        {/* Logo */}
        <ChakraLink asChild>
          <Link href={'/'} passHref>
            <ChakraImage asChild>
              <Image src="/static/images/logo.png" alt="Logo" width={40} height={40} />
            </ChakraImage>
          </Link>
        </ChakraLink>

        <Group>
          {/* Menu Items */}
          <Link href="/about">
            <Button variant="ghost" size="sm">About Us</Button>
          </Link>
          {createDropdown("Competitions", [
            { name: "All", icon: <LuCalendar1 />, href: "#"},
            { name: "My Competitions", icon: <LuCalendar1 /> , href: "#"},
          ])}
          {createDropdown("Results", [
            { name: "Rankings", icon: <LuChartNoAxesColumn /> , href: "#"},
            { name: "Records", icon: <LuChartNoAxesColumn /> , href: "#"},
            { name: "Persons", icon: <LuUser />, href: "#" },
            { name: "My Results", icon: <LuChartNoAxesColumn />, href: "/persons/2022ANDE01" },
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
            { name: "Style Guide", icon: <LuCircleHelp /> , href: "/information/styleguide"},
          ])}
          <Button variant="ghost"  size="sm">WCA Live</Button>
        </Group>
      </HStack>

      {/* Right Section: Search and Avatar */}
      <HStack>
        <InputGroup startElement={<LuSearch />}>
          <Input placeholder="Search site" />
        </InputGroup>
        <ColorModeButton variant="ghost" />
        <Button variant="ghost">
          <LuGlobe /> English
        </Button>
        {/* Avatar with Profile Menu */}
        <MenuRoot>
          <MenuTrigger>
            <Avatar name="Mitchell Anderson" src="/static/images/ma.jpg" />
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
      </HStack>
    </HStack>
  );
}
