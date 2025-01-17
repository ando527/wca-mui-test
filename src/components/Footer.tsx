'use client'

import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default, // Theme-aware background
        borderTop: `1px solid ${theme.palette.divider}`, // Theme-aware divider
        py: 3,
        px: 2,
        textAlign: "center",
        color: theme.palette.text.primary, // Theme-aware text color
      }}
    >
      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
          sx={{ color: theme.palette.text.primary }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
          sx={{ color: theme.palette.text.primary }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
          sx={{ color: theme.palette.text.primary }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://github.com"
          target="_blank"
          aria-label="GitHub"
          sx={{ color: theme.palette.text.primary }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://youtube.com"
          target="_blank"
          aria-label="YouTube"
          sx={{ color: theme.palette.text.primary }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>

      {/* Footer Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 1,
        }}
      >
        <img src="/static/images/logo.png" alt="WCA Logo" style={{ height: 50 }} />
        <Link href="/about" underline="none" sx={{ color: theme.palette.text.primary }}>
          About Us
        </Link>
        <Link href="/faqs" underline="none" sx={{ color: theme.palette.text.primary }}>
          FAQs
        </Link>
        <Link href="/contact" underline="none" sx={{ color: theme.palette.text.primary }}>
          Contact
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          underline="none"
          sx={{ color: theme.palette.text.primary }}
        >
          GitHub
        </Link>
        <Link href="/privacy" underline="none" sx={{ color: theme.palette.text.primary }}>
          Privacy
        </Link>
        <Link href="/disclaimer" underline="none" sx={{ color: theme.palette.text.primary }}>
          Disclaimer
        </Link>
      </Box>

    </Box>
  );
}
