import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import "leaflet/dist/leaflet.css";



const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: "#0051BA" }, // Pantone 293 C
          100: { value: "#003366" },
          200: { value: "#0153C1" },
          300: { value: "#42D0FF" },
          400: { value: "#99C7FF" },
        },
        green: {
          50: { value: "#029347" }, // Pantone 348 C
          100: { value: "#00FF7F" },
          200: { value: "#1B4D3E" },
          300: { value: "#C1E6CD" },
        },
        wcawhite: {
          50: { value: "#FFFFFF" }, // Pantone White
          100: { value: "#FCFCFC" },
          200: { value: "#3B3B3B" },
          300: { value: "#E0DDD5" },
          400: { value: "#F4F1ED" },
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
      sizes: {
        "table.xs.cellPadding": { value: "{sizes.table-xs.cellPadding}" },
        "table.xs.fontSize": { value: "{sizes.table-xs.fontSize}" },
      },
      shadows:{
        wca: {
          value: {
            _light: "rgba(17, 17, 26, 0.2) 0px 0px 8px",
            _dark: "rgba(252, 252, 252, 0.4) 0px 0px 8px"
          }
        }
      },
      colors: {
        primary: { value: "{colors.blue.50}" },
        secondary: { value: "{colors.green.50}" },
        background: { value: "{colors.white.50}" },
        whiteText: { value: "{colors.supplementary.texts.light}" },
        textPrimary: { value: "{colors.supplementary.texts.dark}" },
        textSecondary: { value: "{colors.supplementary.texts.gray1}" },
        link: { value: "{colors.supplementary.links.blue}" },
        danger: { value: "{colors.red.50}" },
        warning: { value: "{colors.yellow.50}" },
        success: { value: "{colors.green.100}" },
        wcawhite: {
          muted: { value: { _light: "{colors.wcawhite.400}", _dark: "{colors.wcawhite.200}" }, },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
        },
        wcayellow: {
          solid: { value:  { _light: "colors.yellow.50", _dark: "colors.yellow.200" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
        },
        wcagreen: { 
          solid: { value:  { _light: "colors.green.50", _dark: "colors.green.200" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.green.200}" },
          muted: { value: "{colors.green.200}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value:  { _light: "colors.green.50", _dark: "colors.green.100" } },
          focusRing: { value: "{colors.brand.500}" },
        },
        wcablue: { 
          solid: { value:  { _light: "colors.blue.200", _dark: "colors.blue.50" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.blue.200}" },
          muted: { value: "{colors.blue.100}" },
          subtle: { value: "{colors.blue.200}" },
          emphasized: { value:  { _light: "colors.blue.400", _dark: "colors.blue.50" } },
          focusRing: { value: "{colors.blue.100}" },
        },
        wcared: { 
          solid: { value:  { _light: "colors.red.200", _dark: "colors.red.50" } },
          contrast: { value: { _light: "colors.supplementary.texts.light", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.red.200}" },
          muted: { value: "{colors.red.200}" },
          subtle: { value: "{colors.red.200}" },
          emphasized: { value:  { _light: "colors.red.50", _dark: "colors.red.100" } },
          focusRing: { value: "{colors.blue.100}" },
        },
        wcaorange: { 
          solid: { value:  { _light: "colors.orange.200", _dark: "colors.orange.50" } },
          contrast: { value: { _light: "colors.supplementary.texts.light", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.orange.200}" },
          muted: { value: "{colors.orange.200}" },
          subtle: { value: "{colors.orange.200}" },
          emphasized: { value:  { _light: "colors.orange.50", _dark: "colors.orange.100" } },
          focusRing: { value: "{colors.blue.100}" },
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
    recipes: {
      button: {
        base: {
          transitionProperty: "background",
          transitionTimingFunction: "ease",
          borderRadius: "l3",
          lineHeight: "1.2",
          alignSelf: "start",
          colorPalette: "wcablue"
        },
        variants: {
          size: {
            sm: {
              padding: "4",
              textStyle: "xs",
            },
            lg: {
              px: "6",
              py: "2.5",
              textStyle: "sm",
            },
          },
        },
        defaultVariants: {
          size: "lg",
        },
      }
    }
  },
});

export const system = createSystem(defaultConfig, customConfig);
