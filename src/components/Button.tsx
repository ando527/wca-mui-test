"use client"

import { chakra } from "@chakra-ui/react"

const Button = chakra("button", {
  base: {
    display: "flex",
    borderRadius: "5px",
    transition: "background 0.2s ease",
    fontWeight: "500",
    cursor: "pointer",
    lineHeight: "1",
    alignSelf: "start",
  },
  variants: {
    visual: {
      solid: { 
        borderWidth: "2px", 
        borderColor: "wcablue.solid", 
        bg: "wcablue.solid", 
        color: "whiteText",
        _hover: {
            bg: "wcablue.muted",
            borderColor: "wcablue.muted", 
          },
       },
      outline: {
         borderWidth: "2px", 
         borderColor: "wcablue.solid", 
         color: "wcablue.contrast" ,
         _hover: {
            bg: "wcablue.emphasized",
          },},
      
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { paddingLeft: "6",paddingTop: "2.5", paddingRight: "6", paddingBottom: "2.5", fontSize: "14px" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "lg",
    
  },
})

export default Button;