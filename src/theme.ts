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
          100: { value: "#1B4D3E" },
          300: { value: "#00FF7F" },
          400: { value: "#C1E6CD" },
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
          100: { value: "#7A1220" },
          300: { value: "#FF6B6B" },
          400: { value: "#F6C5C5" },
        },
        yellow: {
          50: { value: "#FFD313" }, // Pantone 116 C
          100: { value: "#664D00" },
          300: { value: "#FFF5AA" },
          400: { value: "#FFF5B8" },
        },
        orange: {
          50: { value: "#FF5800" }, // Pantone Orange 021 C
          100: { value: "#7A2B00" },
          300: { value: "#FFD59E" },
          400: { value: "#FFD5BD" },
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
            mid: { value: "#B8B8B8" },
            soft: { value: "#F9F9F9" },
            transparent: {value: "rgba(0,0,0,0)"},
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
        transparent: { value: "{colors.supplementary.bgs.transparent}" },
        whiteText: { value: "{colors.supplementary.texts.light}" },
        textPrimary: { value: "{colors.supplementary.texts.dark}" },
        textSecondary: { value: "{colors.supplementary.texts.gray1}" },
        lightBackground: { value: "{colors.supplementary.bgs.light}" },
        mediumBackground: { value: "{colors.supplementary.bgs.medium}" },
        link: { value: "{colors.supplementary.links.blue}" },
        danger: { value: "{colors.red.50}" },
        warning: { value: "{colors.yellow.50}" },
        success: { value: "{colors.green.100}" },
        wcawhite: {
          muted: { value: { _light: "{colors.wcawhite.400}", _dark: "{colors.wcawhite.200}" }, },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
        },
        yellow: {
          solid: { value:  { _light: "colors.yellow.50", _dark: "colors.yellow.100" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
          hoverText: { value: "{colors.supplementary.texts.light}" },
          fg: { value: "{colors.yellow.400}" },
          muted: { value: "{colors.yellow.100/90}" },
          subtle: { value: "{colors.yellow.100}" },
          emphasized: { value: "{colors.yellow.300}" },
          focusRing: { value:  { _light: "colors.yellow.50", _dark: "colors.yellow.100" } },
          gradient: {
            default: {
              value: {
                _light: "linear-gradient(90deg, {colors.yellow.fg} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.yellow.muted} 0%, {colors.bg} 100%)"
              },
            },
            hover: {
              value: {
                _light: "linear-gradient(90deg, {colors.yellow.fg/80} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.yellow.muted/80} 0%, {colors.bg} 100%)"
              },
            }
          },
        },
        green: { 
          solid: { value:  { _light: "colors.green.50", _dark: "colors.green.100" } },
          contrast: { value: "{colors.supplementary.texts.light}" },
          fg: { value: "{colors.green.400}" },
          muted: { value: "{colors.green.100/90}" },
          subtle: { value: "{colors.green.100}" },
          emphasized: { value: "{colors.green.300}" },
          focusRing: { value:  { _light: "colors.green.50", _dark: "colors.green.100" } },
          gradient: {
            default: {
              value: {
                _light: "linear-gradient(90deg, {colors.green.fg} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.green.muted} 0%, {colors.bg} 100%)"
              },
            },
            hover: {
              value: {
                _light: "linear-gradient(90deg, {colors.green.fg/80} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.green.muted/80} 0%, {colors.bg} 100%)"
              },
            }
          },
        },
        blue: { 
          solid: { value:  { _light: "colors.blue.50", _dark: "colors.blue.100" } },
          contrast: { value: "{colors.supplementary.texts.light}" },
          fg: { value: "{colors.blue.400}" },
          muted: { value: "{colors.blue.100/90}" },
          subtle: { value: "{colors.blue.100}" },
          emphasized: { value: "{colors.blue.300}" },
          focusRing: { value:  { _light: "colors.blue.50", _dark: "colors.blue.100" } },
          gradient: {
            default: {
              value: {
                _light: "linear-gradient(90deg, {colors.blue.fg} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.blue.muted} 0%, {colors.bg} 100%)"
              },
            },
            hover: {
              value: {
                _light: "linear-gradient(90deg, {colors.blue.fg/80} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.blue.muted/80} 0%, {colors.bg} 100%)"
              },
            }
          },
        },
        red: { 
          solid: { value:  { _light: "colors.red.50", _dark: "colors.red.100" } },
          contrast: { value: "{colors.supplementary.texts.light}" },
          fg: { value: "{colors.red.400}" },
          muted: { value: "{colors.red.100/90}" },
          subtle: { value: "{colors.red.100}" },
          emphasized: { value: "{colors.red.300}" },
          focusRing: { value:  { _light: "colors.red.50", _dark: "colors.red.100" } },
          gradient: {
            default: {
              value: {
                _light: "linear-gradient(90deg, {colors.red.fg} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.red.muted} 0%, {colors.bg} 100%)"
              },
            },
            hover: {
              value: {
                _light: "linear-gradient(90deg, {colors.red.fg/80} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.red.muted/80} 0%, {colors.bg} 100%)"
              },
            }
          },
        },
        orange: { 
          solid: { value:  { _light: "colors.orange.50", _dark: "colors.orange.100" } },
          contrast: { value: { _light: "colors.supplementary.texts.dark", _dark: "colors.supplementary.texts.light" }, },
          fg: { value: "{colors.orange.400}" },
          muted: { value: "{colors.orange.100/90}" },
          subtle: { value: "{colors.orange.100}" },
          emphasized: { value: "{colors.orange.300}" },
          focusRing: { value:  { _light: "colors.orange.50", _dark: "colors.orange.100" } },
          gradient: {
            default: {
              value: {
                _light: "linear-gradient(90deg, {colors.orange.fg} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.orange.muted} 0%, {colors.bg} 100%)"
              },
            },
            hover: {
              value: {
                _light: "linear-gradient(90deg, {colors.orange.fg/80} 0%, {colors.bg} 100%)",
                _dark: "linear-gradient(90deg, {colors.orange.muted/80} 0%, {colors.bg} 100%)"
              },
            }
          },
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
          transitionProperty: "background, border, color, borderColor",
          transitionTimingFunction: "ease",
          borderRadius: "l3",
          lineHeight: "1.2",
          alignSelf: "start",
          colorPalette: "blue"
        },
        variants: {
          variant: {
            solid: { 
              borderWidth: "2px", 
              borderColor: "colorPalette.solid", 
              bg: "colorPalette.solid", 
              color: "colorPalette.contrast",
              _hover: {
                  bg: "colorPalette.muted",
                  borderColor: "colorPalette.muted", 
                  color: "whiteText",
                },
              _expanded: {
                  bg: "colorPalette.muted",
                  borderColor: "colorPalette.muted", 
                },
             },
            outline: {
               borderWidth: "2px", 
               borderColor: "colorPalette.solid", 
               color: "fg.DEFAULT" ,
               bg: "transparent",
               _hover: {
                  bg: "colorPalette.fg/30",
                },},
            ghost: { 
              borderWidth: "0px", 
              bg: "transparent", 
              color: "fg.DEFAULT",
              _hover: {
                  color: "colorPalette.solid", 
                  bg: "transparent", 
                },
                _expanded: {
                  bg: "transparent",
                },
                 },
            surface: {
              color: "whiteText",
            },
            plain: {
              color: "colorPalette.subtle",
              bg: "lightBackground",
              _hover: {
                bg: "mediumBackground",
              },
            }
          },
          size: {
            sm: {
              padding: "3",
              textStyle: "sm",
            },
            lg: {
              px: "6",
              py: "2.5",
              textStyle: "sm",
            },
          },
        },
        defaultVariants: {
          variant: "solid",
          size: "lg",
        },
      },
      heading: {
        base: {

        },
        variants: {
          size: {
            sm: {
              fontWeight: "medium",//Not used in styleguide
            },
            md: {
              fontWeight: "medium",//Subheading 2
              textStyle: "lg",//same size as lg, just thinner
            },
            lg: {
              fontWeight: "bold",//Subheading 1
            },
            xl: {
              fontWeight: "bold",//Not used in styleguide
            },
            "2xl": {
              fontWeight: "extrabold",//H4
            },
            "3xl": {
              fontWeight: "extrabold",//H3
            },
            "4xl": {
              fontWeight: "extrabold",//H2
            },
            "5xl": {
              fontWeight: "extrabold",//H1
              textTransform: "uppercase"
            },
            "6xl": {
              fontWeight: "extrabold",//Not used in styleguide
            }
          }
        }
      },
      
    },
    slotRecipes: {
      card: {
        variants: {
          variant: {
            hero: {
              root: {
                shadow: "{shadows.wca}",
              },
              body: {
                bg: "colorPalette.solid",
                color:  "colorPalette.contrast",
                
              }
            }
          }
        }
      },
      accordion: {
        variants: {
          variant: {
            subtle: {
              root: {
                "--accordion-radius": "radii.l3",
                transitionProperty: "background, border",//not working
                transitionTimingFunction: "ease",//not working
              },
              item: {
                borderColor: "{colors.supplementary.bgs.mid}",
                borderWidth: "1px",
                marginBottom: "3",
                _open: {
                  bg: "bg",
                },
              },
              itemTrigger: {
                _hover: {
                  bgImage: "var(--chakra-colors-color-palette-gradient-hover)",
                },
                _open: {
                  bgImage: "var(--chakra-colors-color-palette-gradient-default)",
                  borderTopRadius: "var(--accordion-radius)",
                  borderBottomRadius: "0",
                }
              }
            }
          },
        }
      }
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
