"use client"

import { Box } from "@chakra-ui/react"

const StickyComponent = ({ children }) => {
  return (
    <Box position="sticky" top="20px" zIndex="sticky"boxShadow="wca" borderRadius="md">
      {children}
    </Box>
  )
}

export default StickyComponent