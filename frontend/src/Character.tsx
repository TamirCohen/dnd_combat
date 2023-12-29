// Character.tsx
import React from 'react';

interface CharacterProps {
  position: { x: number; y: number };
}

const Character: React.FC<CharacterProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '20px',
        height: '20px',
        background: 'red',
      }}
    />
  );
};

export default Character;
