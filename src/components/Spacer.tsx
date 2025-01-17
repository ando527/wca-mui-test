import React from 'react';

interface SpacerProps {
  height?: number; // Height of the spacer (default is 50px)
  width?: number; // Optional width (default is full width)
}

const Spacer: React.FC<SpacerProps> = ({ height = 50, width = '100%' }) => {
  return <div style={{ height: `${height}px`, width, display: 'block' }} />;
};

export default Spacer;
