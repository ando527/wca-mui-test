'use client'
import React, { useEffect, useRef } from 'react';

const RandomBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hardcoded probability array
  const probabilities: number[][] = [
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
    [0.05, 0.1, 0.1, 0.15, 0.18, 0.2, 0.2, 0.25, 0.35, 0.35, 0.85, 0.9, 1, 1, 1, 1, 1, 1],
  ];

  // Function to determine color based on probability
  const getColor = (probValue: number): string => {
    if (probValue <= 1 / 6) return '#029347'; // 0.0 - 0.166
    if (probValue <= 2 / 6) return '#ff5800'; // 0.167 - 0.333
    if (probValue <= 3 / 6) return '#0051BA'; // 0.334 - 0.5
    if (probValue <= 4 / 6) return '#FFD313'; // 0.501 - 0.666
    if (probValue <= 5 / 6) return '#C62535'; // 0.667 - 0.833
    return 'transparent'; // 0.834 - 1
  };

  useEffect(() => {
    const container = containerRef.current;

    // Clear the container
    if (container) {
      container.innerHTML = '';

      // Generate the grid
      probabilities.forEach((row) => {
        row.forEach((probValue) => {
          const randomNumber = Math.random();
          const div = document.createElement('div');
          div.style.width = '30px';
          div.style.height = '30px';
          div.style.display = 'inline-block';

          if (randomNumber < probValue) {
            div.style.backgroundColor = getColor(randomNumber / probValue);
          } else {
            div.style.backgroundColor = 'transparent';
          }

          container.appendChild(div);
        });
      });
    }
  }, []); // Dependency array is empty since probabilities are hardcoded

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 80,
        right: 0,
        zIndex: -1, // Places it underneath other elements
        pointerEvents: 'none', // Prevents interaction with the grid
        width: `${probabilities[0].length * 30}px`,
        height: `${probabilities.length * 30}px`,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    ></div>
  );
};

export default RandomBackground;
