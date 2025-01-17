"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import InfoIcon from "@mui/icons-material/Info";
import EventIcon from "@mui/icons-material/Event";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GavelIcon from "@mui/icons-material/Gavel";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

import ModeSwitch from '@/components/ModeSwitch';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "100%",
  maxWidth: 400,
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  paddingLeft: theme.spacing(1),
}));

export default function Navbar() {
  const [menuState, setMenuState] = React.useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [avatarMenuAnchor, setAvatarMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (menuName: string) => (event: React.MouseEvent<HTMLElement>) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuName]: event.currentTarget,
    }));
  };

  const handleMenuClose = (menuName: string) => () => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuName]: null,
    }));
  };

  const handleAvatarMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAvatarMenuAnchor(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuAnchor(null);
  };

  const createDropdown = (
    label: string,
    menuName: string,
    items: { name: string; icon: React.ReactNode, href: string }[]
  ) => (
    <Box>
      <Button onClick={handleMenuClick(menuName)} aria-haspopup="true" color="inherit">
        {label}
      </Button>
      <Menu
        anchorEl={menuState[menuName]}
        open={Boolean(menuState[menuName])}
        onClose={handleMenuClose(menuName)}
        keepMounted
      >
        {items.map((item) => (
          <MenuItem key={item.name} onClick={handleMenuClose(menuName)}>
            <Link href={item.href} passHref>
                <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%", // Ensure the link takes full width
                }}
                >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.name}
          </Box>
          </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );

  return (
    <AppBar position="static" color="default" sx={{ borderBottom: "1px solid #ddd" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Section: Logo + Menu Items */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 2 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link href={'/'} passHref>
            <img src="/static/images/logo.png" alt="Logo" style={{ height: 40 }} />
            </Link>
          </Box>    

          {/* Menu Items */}
          <Button>About Us</Button>
          {createDropdown("Competitions", "competitions", [
            { name: "All", icon: <EventIcon />, href: "#"},
            { name: "My Competitions", icon: <EventIcon /> , href: "#"},
          ])}
          {createDropdown("Results", "results", [
            { name: "Rankings", icon: <LeaderboardIcon /> , href: "#"},
            { name: "Records", icon: <LeaderboardIcon /> , href: "#"},
            { name: "Persons", icon: <PersonIcon />, href: "#" },
            { name: "My Results", icon: <LeaderboardIcon />, href: "/results" },
            { name: "Statistics", icon: <LeaderboardIcon />, href: "#" },
            { name: "Multimedia", icon: <LeaderboardIcon />, href: "#" },
            { name: "Results Export", icon: <LeaderboardIcon />, href: "#" },
            { name: "Developer Export", icon: <LeaderboardIcon /> , href: "#"},
          ])}
          {createDropdown("Regulations", "regulations", [
            { name: "About the Regulations", icon: <GavelIcon />, href: "#" },
            { name: "Regulations & Guidelines", icon: <GavelIcon />, href: "#" },
            { name: "Regulations", icon: <GavelIcon />, href: "#" },
            { name: "Guidelines", icon: <GavelIcon />, href: "#" },
            { name: "Scrambles", icon: <GavelIcon />, href: "#" },
            { name: "Incidents log", icon: <GavelIcon /> , href: "#"},
            { name: "Disciplinary log", icon: <GavelIcon />, href: "#" },
            { name: "History", icon: <GavelIcon /> , href: "#"},
            { name: "Translations", icon: <GavelIcon />, href: "#" },
          ])}
          {createDropdown("Information", "information", [
            { name: "About the WCA", icon: <HelpIcon />, href: "#" },
            { name: "WCA Documents", icon: <HelpIcon /> , href: "/information/documents"},
            { name: "WCA Officers & Board", icon: <HelpIcon /> , href: "#"},
            { name: "WCA Delegates", icon: <HelpIcon />, href: "#" },
            { name: "Teams, Committees, and Councils", icon: <HelpIcon /> , href: "#"},
            { name: "Regional Organizations", icon: <HelpIcon /> , href: "#"},
            { name: "Translators", icon: <HelpIcon /> , href: "#"},
            { name: "Frequently Asked Questions", icon: <HelpIcon /> , href: "/information/faq"},
            { name: "Forum", icon: <HelpIcon /> , href: "#"},
            { name: "Educational resources", icon: <HelpIcon />, href: "#" },
            { name: "Contact", icon: <HelpIcon /> , href: "#"},
            { name: "Speedcubing History", icon: <HelpIcon /> , href: "#"},
            { name: "Media Submission", icon: <HelpIcon />, href: "#" },
            { name: "Privacy", icon: <HelpIcon /> , href: "#"},
            { name: "Disclaimer", icon: <HelpIcon />, href: "#" },
            { name: "Tools", icon: <HelpIcon /> , href: "#"},
            { name: "Logo", icon: <HelpIcon /> , href: "#"},
          ])}
          <Button variant="contained" color="primary">WCA Live</Button>
        </Box>

        {/* Right Section: Search and Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Search>
            <StyledInputBase placeholder="Search site" />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Search>
          <ModeSwitch />
          <IconButton>
            <LanguageIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              English
            </Typography>
          </IconButton>
          {/* Avatar with Profile Menu */}
          <IconButton onClick={handleAvatarMenuOpen}>
            <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            anchorEl={avatarMenuAnchor}
            open={Boolean(avatarMenuAnchor)}
            onClose={handleAvatarMenuClose}
            keepMounted
          >
            {[
              { name: "Name", icon: <PersonIcon /> },
              { name: "Notifications", icon: <PersonIcon /> },
              { name: "Edit profile", icon: <PersonIcon /> },
              { name: "My Competitions", icon: <EventIcon /> },
              { name: "My Results", icon: <LeaderboardIcon /> },
              { name: "Staff panel", icon: <PersonIcon /> },
              { name: "Delegate panel", icon: <PersonIcon /> },
              { name: "Polls", icon: <PersonIcon /> },
              { name: "Manage users", icon: <PersonIcon /> },
              { name: "New Competition", icon: <EventIcon /> },
              { name: "Manage your applications", icon: <PersonIcon /> },
              { name: "Manage authorized applications", icon: <PersonIcon /> },
              { name: "Sign out", icon: <PersonIcon /> },
            ].map((item) => (
              <MenuItem key={item.name} onClick={handleAvatarMenuClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
