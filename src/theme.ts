import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: "#0051BA" }, // Pantone 293 C
          100: { value: "#42D0FF" },
          200: { value: "#99C7FF" },
        },
        green: {
          50: { value: "#029347" }, // Pantone 348 C
          100: { value: "#00FF7F" },
          200: { value: "#1B4D3E" },
          300: { value: "#C1E6CD" },
        },
        white: {
          50: { value: "#FFFFFF" }, // Pantone White
          100: { value: "#FCFCFC" },
          200: { value: "#F4F1ED" },
          300: { value: "#EDEDED" },
          400: { value: "#DCDCDC" },
          500: { value: "#F9F9F9" },
        },
        red: {
          50: { value: "#C62535" }, // Pantone 1797 C
          100: { value: "#FF6B6B" },
          200: { value: "#7A1220" },
          300: { value: "#F6C5C5" },
        },
        yellow: {
          50: { value: "#FFD313" }, // Pantone 116 C
          100: { value: "#FFF5AA" },
          200: { value: "#664D00" },
        },
        orange: {
          50: { value: "#FF5800" }, // Pantone Orange 021 C
          100: { value: "#FFD59E" },
          200: { value: "#7A2B00" },
        },
        supplementary: {
          texts: {
            light: { value: "#FCFCFC" },
            dark: { value: "#1E1E1E" },
            gray1: { value: "#6B6B6B" },
            gray2: { value: "#3B3B3B" },
          },
          bgs: {
            white: { value: "#FCFCFC" },
            light: { value: "#EDEDED" },
            medium: { value: "#DCDCDC" },
            dark: { value: "#1E1E1E" },
            soft: { value: "#F9F9F9" },
          },
          links: {
            blue: { value: "#0051BA" },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.blue.50}" },
        secondary: { value: "{colors.green.50}" },
        background: { value: "{colors.white.50}" },
        textPrimary: { value: "{colors.supplementary.texts.dark}" },
        textSecondary: { value: "{colors.supplementary.texts.gray1}" },
        link: { value: "{colors.supplementary.links.blue}" },
        danger: { value: "{colors.red.50}" },
        warning: { value: "{colors.yellow.50}" },
        success: { value: "{colors.green.100}" },
        wcayellow: {
          solid: { value:  { _light: "colors.yellow.50", _dark: "colors.yellow.200" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
        },
        wcagreen: { 
          solid: { value:  { _light: "colors.green.50", _dark: "colors.green.200" } },
          contrast: { value: { _light: "colors.supplementary.texts.light", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.green.200}" },
          muted: { value: "{colors.green.200}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
        bg: {
          DEFAULT: { value:  { _light: "colors.supplementary.bgs.white", _dark: "colors.supplementary.bgs.dark" }, },
          inverted: { value:  { _light: "colors.supplementary.bgs.white", _dark: "colors.supplementary.bgs.dark" }, },
        },
        fg: {
          DEFAULT: { value:  { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
          inverted: { value:  { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
        },

      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
