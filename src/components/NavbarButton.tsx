"use client"

import { chakra, Icon } from "@chakra-ui/react"
import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";


interface NavbarButtonProps {
    hasDropdown?: boolean;
  }

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
        borderWidth: "0px", 
        bg: "transparent", 
        color: "wcablue.contrast",
        _hover: {
            color: "wcablue.muted", 
          },
       },      
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "3", fontSize: "16px" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "lg",
    
  },
})

const NavbarButton: React.FC<NavbarButtonProps & React.ComponentProps<typeof Button>> = ({
    hasDropdown,
    children,
    ...props
  }) => {
    return (
      <Button {...props}>
        {children}
        {hasDropdown && (
          <Icon
            as={LuChevronDown}
          />
        )}
      </Button>
    );
  };
  

export default NavbarButton;