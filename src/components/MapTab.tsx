'use client'

import React from 'react';
import {Center, Heading, Text} from "@chakra-ui/react";
import dynamic from "next/dynamic";




const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

const MapTab: React.FC = () => {

  const locations = [
    {
      Title: "Sydney Opera House",
      Link: "https://www.sydneyoperahouse.com/",
      Lat: -33.8568,
      Long: 151.2153,
    },
    {
      Title: "Eiffel Tower",
      Link: "https://www.toureiffel.paris/",
      Lat: 48.8584,
      Long: 2.2945,
    },
    {
      Title: "Statue of Liberty",
      Link: "https://www.nps.gov/stli/index.htm",
      Lat: 40.6892,
      Long: -74.0445,
    },
  ];

  return (
    <>
      <Center bg="bg.emphasized" h="600px">
        {/* Replace with a real map implementation */}
        <MapComponent locations={locations} />;

      </Center>
    </>
  );
};

export default MapTab;
